import React from 'react';
import { Screen } from '../../components/screen/screen';
import { Nav } from '../../components/nav/nav';
import { HomeAreaAlert } from '../../components/homeAreaAlert/homeAreaAlert';
import { BtnAreaHome } from '../../components/btnAreaHome/btnAreaHome';
import { NewsArea } from '../../components/newsArea/newsArea';

export const Main: React.FC = () => {
	return (
		<Screen>
			<Nav selected={1} />
			<div className='flex flex-col w-full p-[1.25rem]'>
				<div className='flex flex-col gap-3 flex-[4] w-full'>
					<HomeAreaAlert />
					<div className='flex flex-1 flex-row'>
						<NewsArea />
					</div>
					<div className='flex flex-1 flex-row gap-[1rem]'>
						<BtnAreaHome />
					</div>
				</div>
				<div className='flex flex-[6] w-full'></div>
			</div>
		</Screen>
	);
};