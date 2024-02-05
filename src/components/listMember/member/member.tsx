import React, { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { ButtonTable } from '../../buttonTable/buttonTable';
import { ImExit } from 'react-icons/im';
import { Modal } from '@components';
import { IMember, chargeService } from '@domain';
import { v4 } from 'uuid';
import { adaptarToSelect } from '@utils';

export function Member({ id, name, lastAccess, dailyGoal, office, timeOfOrg }: IMember): React.ReactElement {
	const [modalPromotion, setModalPromotion] = useState(false);
	const [modalDemote, setModalDemote] = useState(false);
	const [modalDismiss, setModalDismiss] = useState(false);
	const [charge, setCharge] = useState<{ id: number; text: string }[]>([]);
	useEffect(() => {
		(
			async () => {
				const chargeServiceResp = await chargeService.getCharge();
				const chargeServiceRespAdapter = adaptarToSelect(chargeServiceResp);
				setCharge(chargeServiceRespAdapter);
			}
		)();
	}, []);
	const promotion = () => {
		setModalPromotion(!modalPromotion);
	};
	const dismiss = () => {
		setModalDismiss(!modalDismiss);
	};
	const demote = () => {
		setModalDemote(!modalDemote);
	};
	return (
		<div key={v4()} className='flex mb-4'>
			<div className='flex flex-1 justify-center items-center text-white'>
				<p>{id}</p>
			</div>
			<div className='flex flex-1 justify-center items-center text-white'>
				<p>{name}</p>
			</div>
			<div className='flex flex-1 justify-center items-center text-white'>
				<p>{lastAccess}</p>
			</div>
			<div className='flex flex-1 justify-center items-center text-white'>
				<p>{dailyGoal}</p>
			</div>
			<div className='flex flex-1 justify-center items-center text-white'>
				<p>{office}</p>
			</div>
			<div className='flex flex-1 justify-center items-center text-white'>
				<p>{timeOfOrg}</p>
			</div>
			<div className='flex flex-[3] gap-4 justify-center items-center text-white'>
				<ButtonTable
					icon={<IoIosArrowUp />}
					text={'Promover'}
					bg={'blue'}
					onClick={promotion}
				/>
				<ButtonTable
					icon={<IoIosArrowDown />}
					text={'Rebaixar'}
					bg={'blue'}
					onClick={demote}
				/>
				<ButtonTable
					icon={<ImExit />}
					text={'Demitir'}
					bg={'red'}
					onClick={dismiss}
				/>
			</div>
			<Modal
				modal={modalPromotion}
				modalOpenClose={() => setModalPromotion(!modalPromotion)}
				textSelect='Selecionar Cargo'
				title='Promover membro'
				placeholder='Digite o ID do membro'
				dataItem={charge}
				titleBtn='Confirmar'
				textLabel='Selecione um Cargos'
				inputMembers={name}
			/>
			<Modal
				modal={modalDemote}
				modalOpenClose={() => setModalDemote(!modalDemote)}
				textSelect='Rebaixar o membro'
				title='Advertir membro'
				placeholder='Digite o ID do membro'
				dataItem={charge}
				titleBtn='Confirmar'
				textLabel='Lista de cargos'
				inputMembers={name}
			/>
			<Modal
				modal={modalDismiss}
				modalOpenClose={() => setModalDismiss(!modalDismiss)}
				title='Expulsar membro da organização'
				placeholder='Digite o ID do membro'
				titleBtn='Confirmar'
				textLabel='Motivo'
				inputMembers={name}
			/>
		</div>
	);
}
