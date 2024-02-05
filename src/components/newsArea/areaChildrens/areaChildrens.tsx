import React, { useEffect, useState } from 'react';
import { TextTittle18px } from '../../title18px/title18px';
interface IAreaChildren {
	children: React.ReactNode[] | React.ReactNode;
	title: string;
	halfPosition?: boolean;
	length: number
}

export const AreaChildren: React.FC<IAreaChildren> = ({ children, title, halfPosition, length }) => {
	const [positionSlider, setPositionSlider] = useState(0);

	const next = () => {

		console.log(length);
		setPositionSlider((positionSlider) => (Number(positionSlider) === Number(length - 1) ? 0 : Number(positionSlider + 1)));
	};
	useEffect(() => {
		const slideInterval = setInterval(next, 5000);
		return () => clearInterval(slideInterval);
	}, []);

	return (
		<div className={'flex flex-col gap-1 flex-1 h-min bg-bgContrast rounded-xl px-4 py-2'}>
			<TextTittle18px title={title} />
			<div className='flex overflow-hidden'>
				<div
					className=' flex flex-1 transition-transform ease-out duration-1000'
					style={{ transform: `translateX(-${halfPosition ? positionSlider * 50 : positionSlider * 100}%)` }}
				>
					{children}
				</div>
			</div>
		</div>
	);
};