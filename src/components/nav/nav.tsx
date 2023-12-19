import React, { useState } from 'react';
import { arrayMenu } from './arrayMenu';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
interface Inav {
	selected: number;
}

export const Nav: React.FC<Inav> = ({ selected }) => {

	const [isHovered, setHovered] = useState(0);

	const handleMouseEnter = (id: number) => {
		setHovered(id);
	};

	const handleMouseLeave = (id: number) => {
		setHovered(id);
	};

	return (
		<div className='w-1/5 font-oxanium'>
			<div className=' p-[40px]'>
				<div className='flex'>
					<img src={Logo} alt="Logo" />
					<p className='font-semibold text-lg text-textDisabledMenu'>
						<span className='text-white'>Organização </span>
						painel
					</p>
				</div>
				<p className='text-subTitle font-light text-xs'>Gerencie sua organização através dos menus abaixo.</p>

			</div>
			<nav>
				{
					arrayMenu.map((item) => (
						<Link to={'/' + item.link}
							onMouseEnter={() => handleMouseEnter(item.id)}
							onMouseLeave={() => handleMouseLeave(0)}
							key={item.id}
							className='flex relative w-min justify-start items-center gap-[27px] px-[40px] my-5 cursor-pointer	'
						>
							{
								selected === item.id || isHovered === item.id ? <div className='absolute w-[12px] h-[12px] rounded-full bg-[#53B9EA] left-[-6px]'></div> : ''
							}
							<div className='w-7 h-7 flex justify-center items-center'>
								<img
									src={
										selected === item.id || isHovered === item.id
											? item.iconSelected
											: item.icon
									}
									alt={'Item do menu ' + item.text}
								/>
							</div>
							<p className={`text-sm font-normal  ${selected === item.id || isHovered === item.id ? 'text-textSelectedMenu' : 'text-textDisabledMenu'}`}>{item.text}</p>
						</Link>
					))
				}
			</nav>
		</div>

	);
};

