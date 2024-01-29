import React from 'react';

interface props {
	icon: React.ReactNode
	text: string
	bg: 'red' | 'blue';
	onClick: () => void;
}

export function ButtonTable({ icon, text, bg, onClick }: props): React.ReactElement {
	let classColor;
	if (bg === 'red') {
		classColor = 'bg-gradientBtnPrimaryRed border-borderBtnPrimaryRed';
	} else if (bg === 'blue') {
		classColor = 'bg-gradientBtnSecondaryBlue border-buttonListBlue';
	}
	return (
		<button className={`flex-1 h-[2rem] flex gap-4 justify-center items-center ${classColor} border`} onClick={onClick}>
			{icon}
			<p>{text}</p>
		</button>
	);
}