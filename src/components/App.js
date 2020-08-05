import './App.css';
import React from 'react';
import Headerku from './Header';
import Contentku from './Content';
import { Layout } from 'antd';

const { Footer } = Layout;

class App extends React.Component {
	render() {
		return (
			<Layout className="layout">
				<Headerku />
				<Contentku />
				<Footer style={{ textAlign: 'center' }}>Dibuat oleh Luissa Nugraha</Footer>
			</Layout>
		);
	}
}

export default App;
