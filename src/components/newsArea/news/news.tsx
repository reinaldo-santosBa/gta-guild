import React from 'react';
interface INews {
	img: string;
	name: string;
	office: string;
	news: string
}

export const News: React.FC<INews> = ({ img, name, office, news }) => {
	return (
		<div className='flex flex-none w-full'>
			<div className='flex flex-1 items-center justify-center'>
				<img src={img} alt="" />
			</div>
			<div className='flex-[9]  flex flex-col items-start justify-center'>
				<p
					className='text-white capitalize text-[.9rem] font-bold flex justify-start gap-2'
				>
					{name}
					<span
						className='text-textGreen text-[.6rem]'
					>
						{office}
					</span>
				</p>
				<p className='text-xs text-subTitle capitalize'>
					{news}
				</p>
			</div>
		</div>
	);
};