import { NotifyAlertTypes } from '@domain';
import React from 'react';

export const NotifyAlert: React.FC<NotifyAlertTypes> = ({ title, message, borderColor }) => {
	let borderColors;
	if (borderColor === 'red') {
		borderColors = 'border-borderBtnPrimaryRed';
	} else if (borderColor === 'yellow') {
		borderColors = 'border-alert';
	} else if (borderColor === 'green') {
		borderColors = 'border-borderBtnPrimaryGreen';
	}

	return (
		<div className={`flex-none py-[.75rem] px-[.85rem] bg-bgContrast  w-full h-min rounded-[.5rem] border-b-2 ${borderColors}`}>
			<p className='text-white font-bold text-[1rem]'>{title}</p>
			<p className='text-subTitle text-[.75rem] font-normal'>{message.length > 40 ? message.slice(0, 90) + '...' : message}</p>
		</div>
	);
};