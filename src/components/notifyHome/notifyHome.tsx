import React from 'react';

interface INotify {
	title: string;
	message: string;
	borderColor: 'red' | 'yellow' | 'green';
}

export const NotifyAlert: React.FC<INotify> = ({ title, message, borderColor }) => {
	let borderColors;
	if (borderColor === 'red') {
		borderColors = 'border-borderBtnPrimaryRed';
	} else if (borderColor === 'yellow') {
		borderColors = 'border-alert';
	} else if (borderColor === 'green') {
		borderColors = 'border-borderBtnPrimaryGreen';
	}

	return (
		<div className={`flex-none py-[.75rem] px-[.85rem] bg-bgContrast  w-full h-[100%] rounded-[.5rem] border-b-2 ${borderColors}`}>
			<p className='text-white font-bold text-[1rem]'>{title}</p>
			<p className='text-subTitle text-[.75rem] font-normal'>{message}</p>
		</div>
	);
};