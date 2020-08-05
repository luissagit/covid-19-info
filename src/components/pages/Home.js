import React from 'react';
import { Skeleton, Spin, Space, Card, Col, Row } from 'antd';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			data: null
		};
	}
	
	componentDidMount() {
		fetch("https://indonesia-covid-19.mathdro.id/api")
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({
					isLoaded: true,
					data: result
				});
			},
			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
			}
		)
	}
	
	render() {
		const { error, isLoaded, data } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return (
				<Row gutter={16}>
					<Col style={{ margin: '6px 0' }} xs={24} sm={24} md={12} lg={8} xl={8}>
						<Card bordered={false}>
							<Skeleton active/>
						</Card>
					</Col>
				</Row>
			);
		} else {
			return (
			<div className="site-card-border-less-wrapper">
				<Row gutter={16}>
					<Col style={{ margin: '6px 0' }} xs={24} sm={24} md={12} lg={8} xl={8}>
						<Card title="Positif" bordered={false}>
							{ data.perawatan }
						</Card>
					</Col>
					<Col style={{ margin: '6px 0' }} xs={24} sm={24} md={12} lg={8} xl={8}>
						<Card title="Sembuh" bordered={false}>
							{ data.sembuh }
						</Card>
					</Col>
					<Col style={{ margin: '6px 0' }} xs={24} sm={24} md={12} lg={8} xl={8}>
						<Card title="Meninggal" bordered={false}>
							{ data.meninggal }
						</Card>
					</Col>
				</Row>
			</div>
			);
		}
	}
}


export default Home;