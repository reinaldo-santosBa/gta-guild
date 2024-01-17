import { IPenalties } from '@domain';
import React from 'react';

export const Penailtities: React.FC<IPenalties> = ({
	data,
	violation,
	author
}) => {
	return (
		<div className='flex-none w-[50%]'>
			<span className='text-[.75rem] text-subTitle font-normal'>{data}</span>
			<p className='text-[.75rem] text-textRed font-normal'>{violation}</p>
			<p className='text-[.69rem] text-subTitle font-normal'>Autor<span className='text-textBlue'> {author}</span></p>
		</div >
	);
};