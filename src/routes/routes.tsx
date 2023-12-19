import React from 'react';
import {
	createBrowserRouter
} from 'react-router-dom';
import { Main } from '../pages/main/main';
import { Bank } from '../pages/bank/bank';
import { Goals } from '../pages/goals/goals';
import { Ranking } from '../pages/ranking/ranking';
import { Route } from '../pages/route/route';
import { Comunication } from '../pages/comunication/comunication';
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
		element: <Comunication />,
	},
]);