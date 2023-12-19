import React from 'react';
import { Screen } from '../../components/screen/screen';
import { Nav } from '../../components/nav/nav';
import { HomeAreaAlert } from '../../components/homeAreaAlert/homeAreaAlert';

export const Main: React.FC = () => {
	return (
		<Screen>
			<Nav selected={1} />
			<div className='flex flex-col w-full p-[1.25rem]'>
				<div className='flex flex-col flex-[4] w-full'>
					<HomeAreaAlert />
					<div className='flex flex-1 flex-row'></div>
					<div className='flex flex-1 flex-row'></div>
				</div>
				<div className='flex flex-[6] bg-red-600 w-full'></div>
			</div>
		</Screen>
	);
};