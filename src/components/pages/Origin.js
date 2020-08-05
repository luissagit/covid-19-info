import React from 'react';
import { Skeleton, List, Typography, Divider, Row, Col } from 'antd';


class Origin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			perProv: []
		};
	}
	
	componentDidMount() {
		fetch("https://indonesia-covid-19.mathdro.id/api/provinsi")
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({
					isLoaded: true,
					perProv: result.data
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
		const { error, isLoaded, perProv } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return (
				<List style={{backgroundColor : 'white'}}>
					<List.Item style={{ margin : '10px 5px 12px 5px', padding: '0px 5px' }} xs={24} sm={24} md={12} lg={8} xl={8}>
						<Skeleton active/>
					</List.Item>
				</List>
			);
		} else {
			return(
			<div>
				<List
					style={{backgroundColor:'white'}}
					size="large"
					bordered
					dataSource={this.state.perProv}
					renderItem={item => <List.Item>
						<Row>
							<h3>{item.provinsi}</h3>
							<Divider />
							<Col span={8}>
								<Row>Positif</Row>
								<Row>{ item.kasusPosi }</Row>
							</Col>
							<Col span={8}>
								<Row>Sembuh</Row>
								<Row>{ item.kasusSemb }</Row>
							</Col>
							<Col span={8}>
								<Row>Meninggal</Row>
								<Row>{ item.kasusMeni }</Row>
							</Col>
						</Row>
					</List.Item>}
				/>
			</div>
			);
		}
	}
}

export default Origin;