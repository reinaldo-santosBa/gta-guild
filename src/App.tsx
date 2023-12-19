import React from 'react';
import { Nav } from './components/nav/nav';
export default function App(): React.ReactElement {
	return (
		<section className='bg-imgBg bg-cover bg-no-repeat bg-center w-screen h-screen overflow-hidden overflow-x-hidden'>
			<Nav selected={1} />
		</section>
	);
}