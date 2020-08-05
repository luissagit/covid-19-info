import React from 'react';
import { Layout } from 'antd';
import Home from './pages/Home';
import Origin from './pages/Origin';
import Info from './pages/Info';
import {Route} from 'react-router-dom';

const { Content } = Layout;

class Contentku extends React.Component {
	render() {
		return (
			<Content style={{ margin : '10px 5px 12px 5px', padding: '0px 5px' }}>
				<Route exact path="/" component={Home} />
				<Route path="/daerah" component={Origin} />
				<Route path="/info" component={Info} />
			</Content>
		);
	}
}

export default Contentku;