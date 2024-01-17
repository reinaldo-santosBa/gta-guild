import React, { useEffect, useState } from 'react';
import Face from '../../assets/Face.png';
import { NotifyAlert } from '@components';
import { NotifyAlertTypes, notifyAlertService } from '@domain';

export const HomeAreaAlert: React.FC = () => {
	const [positionSlider, setPositionSlider] = useState(0);
	const [notifyAlerts, setNotifyAlerts] = useState<NotifyAlertTypes[]>([]);
	const next = () =>
		setPositionSlider((positionSlider) => (positionSlider === 3 - 1 ? 0 : positionSlider + 1));
	useEffect(() => {
		const slideInterval = setInterval(next, 10000);
		return () => clearInterval(slideInterval);
	}, []);

	useEffect(() => {
		(
			async () => {
				const notifyAlert = await notifyAlertService.getNotifyAlert();
				setNotifyAlerts(notifyAlert);
			}
		)();
	}, []);

	return (
		<div className='flex flex-1 flex-row'>
			<div className="flex-1">
				<p className='text-white font-bold text-[1.5rem]'>Principal</p>
				<p className='text-[.75rem] text-subTitle'>Encontre tudo o que precisa para gerenciar um membro nas opções abaixo.</p>
			</div >
			<div className="flex-[2] flex overflow-hidden">
				<div
					className={'flex transition-transform ease-out duration-1000'}
					style={{ transform: `translateX(-${positionSlider * 100}%)` }}
				>
					{
						notifyAlerts.map((notifyAlert, index) => (
							<NotifyAlert
								key={index}
								title={notifyAlert.title}
								message={notifyAlert.message}
								borderColor={notifyAlert.borderColor}
							/>
						))
					}

				</div>
			</div>
			<div className="flex flex-1 gap-[.625rem] justify-center items-center">
				<img src={Face} alt="" className='w-[2rem] h-[2rem]' />
				<p className='text-white text-[.8rem] font-medium font-helveticaNeue'>Pixelz Warrios</p>
			</div>
		</div>
	);
};
