import React from 'react';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
export default function App(): React.ReactElement {
	return (
		<RouterProvider router={router} />
	);
}