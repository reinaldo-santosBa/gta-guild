import React from 'react';
import { Nav } from './components/nav/nav';
import { Screen } from './components/screen/screen';
export default function App(): React.ReactElement {
	return (
		<Screen>
			<Nav selected={1} />
			<div className='bg-red-500 w-full h-full'></div>
		</Screen>
	);
}