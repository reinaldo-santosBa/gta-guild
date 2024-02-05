import React from 'react';
import { Profile } from '../profile/profile';

interface props {
	title: string;
	text: string;
}

export function Header({ text, title }: props): React.ReactElement {
	return (
		<div className='flex justify-around'>
			<div className="flex-1">
				<p className='text-white font-bold text-[1.5rem]'>{title}</p>
				<p className='text-[.75rem] text-subTitle'>{text}</p>
			</div>
			<div className='flex-[2]' />
			<Profile />
		</div>
	);
}

