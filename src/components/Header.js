import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

class Headerku extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page : 'beranda',
		};
	}
	
	setPage() {
		let location = useLocation();
		console.log(location.pathname);
	}
	
	render() {
		return (
		<Layout className="layout">
			<Header>
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={this.state.page}>
					<Menu.Item key="beranda"><Link to="/">covid-19info</Link></Menu.Item>
					<Menu.Item key="daerah"><Link to="/daerah">Daerah</Link></Menu.Item>
					<Menu.Item key="info"><Link to="/info">Info</Link></Menu.Item>
				</Menu>
			</Header>
			
		</Layout>
		);
	}
}

export default Headerku;