import React from 'react';
import { Bank, Goals, Main, Ranking } from '@pages';
import {
	Route,
	createBrowserRouter
} from 'react-router-dom';
export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
	},
	{
		path: '/main',
		element: <Main />,
	},
	{
		path: '/bank',
		element: <Bank />,
	},
	{
		path: '/goals',
		element: <Goals />,
	},
	{
		path: '/ranking',
		element: <Ranking />,
	},
	{
		path: '/route',
		element: <Route />,
	},
	{
		path: '/comunication',
	},
]);