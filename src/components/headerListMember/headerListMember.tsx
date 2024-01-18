import React from 'react';
import { arrayHead } from './arrayHead';
export const HeaderListMember: React.FC = () => {
	return (
		<div className='flex-1 mt-4'>
			<p className='text-white font-bold text-[1.5rem] mb-3'>Lista de membros</p>
			<div className="flex pb-4 border-b-[1px] border-b-colorTable">
				{
					arrayHead.map((item, index) => (
						<div className={`flex ${item.name.length > 0 ? 'flex-1' : 'flex-[3]'} justify-center items-center text-colorTable`} key={index}>{item.name}</div>
					))
				}
			</div>
		</div>
	);
};