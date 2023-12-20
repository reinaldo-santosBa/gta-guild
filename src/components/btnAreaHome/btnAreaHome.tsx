import React from 'react';
import { ButtonPrimary } from '../btnPrimary/btnPrimary';

export const BtnAreaHome: React.FC = () => {
	return (
		<>
			<ButtonPrimary
				title='Contratar novo membro +'
				bg='green'
				onClick={
					() => console.log(1)
				}
			/>
			<ButtonPrimary
				title='Advertir membro'
				bg='blue'
				onClick={
					() => console.log(1)
				}
			/>
			<ButtonPrimary
				title='Deixar organização'
				bg='red'
				onClick={
					() => console.log(1)
				}
			/>
			<div className=' flex gap-4 flex-1 h-[3rem] justify-center items-center'>
				<p className='font-semibold
								text-white text-base'>Quantidade de membros</p>
				<p className='font-bold text-base text-subTitle'>
					<span className='text-blueColor '>400</span>
					/1000
				</p>
			</div>
		</>
	);
};