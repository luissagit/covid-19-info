import React from 'react';
import { Card, Col, Row } from 'antd';

class Info extends React.Component {
	render() {
		return(
			<div className="site-card-wrapper">
				<Row gutter={16}>
					<Col span={24}>
						<Card title="Info" bordered={false}>
							<p>Website ini dibuat untuk menampilkan status covid-19 di Indonesia, dibuat dengan menggunakan create-react-app serta pustaka css ant.design.</p>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Info;