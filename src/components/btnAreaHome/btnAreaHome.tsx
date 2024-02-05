import React, { useEffect, useState } from 'react';
import { ButtonPrimary } from '../btnPrimary/btnPrimary';
import { Modal } from '@components';
import { chargeService, motiveService } from '@domain';
import { adaptarToSelect } from '@utils';

export const BtnAreaHome: React.FC = () => {
	const [modalCharge, setModalCharge] = useState(false);
	const [modalMotive, setModalMotive] = useState(false);
	const [charge, setCharge] = useState<{ id: number; text: string }[]>([]);
	const [motive, setMotive] = useState<{ id: number; text: string }[]>([]);

	useEffect(() => {
		(
			async () => {
				const chargeServiceResp = await chargeService.getCharge();
				const chargeServiceRespAdapter = adaptarToSelect(chargeServiceResp);
				setCharge(chargeServiceRespAdapter);
				const motiveServiceResp = await motiveService.getMotive();
				const motiveServiceRespAdapter = adaptarToSelect(motiveServiceResp);
				setMotive(motiveServiceRespAdapter);
			}
		)();
	}, []);

	return (
		<>
			<div className='flex flex-1 flex-row gap-[1rem]'>

				<ButtonPrimary
					title='Contratar novo membro +'
					bg='green'
					onClick={
						() => setModalCharge(!modalCharge)
					}
					height='4.5rem'
				/>
				<ButtonPrimary
					title='Advertir membro'
					bg='blue'
					onClick={
						() => setModalMotive(!modalMotive)
					}
					height='4.5rem'

				/>
				<ButtonPrimary
					title='Deixar organização'
					bg='red'
					onClick={
						() => console.log(1)
					}
					height='4.5rem'
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
			<Modal
				modal={modalCharge}
				modalOpenClose={() => setModalCharge(!modalCharge)}
				textSelect='Lista de cargos'
				title='Contratar novo membro'
				placeholder='Digite um id'
				dataItem={charge}
				titleBtn='Convidar'
				textLabel='Selecione o cargo'
			/>
			<Modal
				modal={modalMotive}
				modalOpenClose={() => setModalMotive(!modalMotive)}
				textSelect='Motivo para advertência'
				title='Advertir membro'
				placeholder='Digite o ID do membro'
				dataItem={motive}
				titleBtn='Confirmar'
				textLabel='Motivo'
			/>
		</>
	);
};