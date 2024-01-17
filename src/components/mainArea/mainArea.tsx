import React from 'react';
import { InfoArea, ListMember } from '@components';

export const MainArea: React.FC = () => {
	return (
		<div className='flex flex-col w-full p-[1.25rem]'>
			<InfoArea />
			<ListMember />
		</div>
	);
};