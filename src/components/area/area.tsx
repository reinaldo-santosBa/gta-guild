import React from 'react';
import { Header } from '../header/header';
interface props {
	title: string;
	text: string;
}
export function Area({ title, text }: props): React.ReactElement {
	return (
		<div className='flex flex-col w-full p-[1.25rem]'>
			<Header
				text={text}
				title={title}
			/>
		</div>
	);
}

