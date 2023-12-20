import React from 'react';
import { Screen } from '../../components/screen/screen';
import { Nav } from '../../components/nav/nav';
import { HomeAreaAlert } from '../../components/homeAreaAlert/homeAreaAlert';
import { ButtonPrimary } from '../../components/btnPrimary/btnPrimary';

export const Main: React.FC = () => {
	return (
		<Screen>
			<Nav selected={1} />
			<div className='flex flex-col w-full p-[1.25rem]'>
				<div className='flex flex-col gap-3 flex-[4] w-full'>
					<HomeAreaAlert />
					<div className='flex flex-[2] flex-row'>

					</div>
					<div className='flex flex-1 flex-row gap-[1rem]'>
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
					</div>
				</div>
				<div className='flex flex-[6] bg-red-600 w-full'></div>
			</div>
		</Screen>
	);
};