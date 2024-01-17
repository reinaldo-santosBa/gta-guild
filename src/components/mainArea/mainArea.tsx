import React from 'react';
import { BtnAreaHome, HomeAreaAlert, NewsPenaltiesArea } from '@components';

export const MainArea: React.FC = () => {
	return (
		<div className='flex flex-col w-full p-[1.25rem]'>
			<div className='flex flex-col gap-3 flex-[4] w-full'>
				<HomeAreaAlert />
				<NewsPenaltiesArea />
				<BtnAreaHome />
			</div>
			<div className='flex flex-[6] w-full'></div>
		</div>
	);
};