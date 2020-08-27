import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage';
import Study from './Study';
import Add from './Add';
import Subtract from './Subtract';
import Multiply from './Multiply';
import Divide from './Divide';
import { createBrowserHistory } from 'history';
import { Switch, Route, Router } from 'react-router';

const routes = [
	{
		path: '/study',
		component: Study,
		name: 'Study-Page',
	},
	{
		path: '/add',
		component: Add,
		name: 'Add-Page',
	},
	{
		path: '/subtract',
		component: Subtract,
		name: 'Subtract-Page',
	},
	{
		path: '/multiply',
		component: Multiply,
		name: 'Multiply-Page',
	},
	{
		path: '/divide',
		component: Divide,
		name: 'Divide-Page',
	},
	{
		path: '/',
		component: LandingPage,
		name: 'Main-Page',
	},
];

const root = document.getElementById('root');
const hist = createBrowserHistory();

ReactDOM.render(
	<Router history={hist}>
		<Switch>
			{routes.map(route => {
				return <Route path={route.path} component={route.component} key={route.name}></Route>;
			})}
		</Switch>
	</Router>,
	root,
);
