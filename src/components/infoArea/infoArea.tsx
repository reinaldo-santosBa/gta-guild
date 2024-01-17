import React from 'react';
import { HomeAreaAlert } from '../homeAreaAlert/homeAreaAlert';
import { NewsPenaltiesArea } from '../newsArea/newsArea';
import { BtnAreaHome } from '../btnAreaHome/btnAreaHome';
export const InfoArea: React.FC = () => {
	return (
		<div className='flex flex-col gap-3 flex-[4] w-full'>
			<HomeAreaAlert />
			<NewsPenaltiesArea />
			<BtnAreaHome />
		</div>
	);
};