import React, { useState } from 'react';
import ModalReact from 'react-modal';
import { ButtonPrimary } from '@components';
import { IoIosArrowDown } from 'react-icons/io';
interface props {
	modal: boolean;
	modalOpenClose: () => void;
	textSelect?: string;
	title: string;
	placeholder: string;
	dataItem?: { id: number; text: string }[];
	titleBtn: string;
	textLabel: string;
	inputMembers?: string;
}

export function Modal({ modal, modalOpenClose, textSelect = '', title, placeholder, dataItem, titleBtn, textLabel, inputMembers = '' }: props): React.ReactElement {
	const [inputMemberName, setInputMemberName] = useState(inputMembers);
	const [inputMotive, setInputMotive] = useState('');
	const [openSelect, setOpenSelect] = useState(true);
	const [selected, setSelected] = useState({
		text: textSelect,
		id: 0
	});
	const changeSelected = (id: number, text: string) => {
		setSelected({
			text,
			id
		});
		changeOpenSelect();
	};
	const changeOpenSelect = () => {
		setOpenSelect(!openSelect);
	};
	const exitModal = () => {
		setSelected({
			text: textSelect,
			id: 0
		});
		modalOpenClose();
	};
	return (
		<ModalReact
			isOpen={modal}
			style={{
				overlay: { background: 'none', position: 'absolute', top: 0, left: 0, border: 'none', width: '100vw', height: '100vh', backdropFilter: 'blur(10px)' },
				content: { background: 'none', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }
			}}

		>
			<div
				className='w-[25rem] h-[auto] p-3 rounded-md'
				style={{
					background: 'rgba(255, 255, 255, 0.05)',
					boxShadow: '0px 4px 23px 0px rgba(0, 0, 0, 0.53)'
				}}
			>
				<h3
					className='text-white text-sm font-bold mb-6'
				>
					{title}
				</h3>
				<div
					className='p-3'
				>
					<input
						placeholder={placeholder}
						style={{ background: 'rgba(255, 255, 255, 0.03)' }}
						type="text"
						value={inputMemberName}
						onChange={(event) => setInputMemberName(event.target.value)}
						className='h-[2rem] border-none outline-none px-4 w-full text-white text-sm font-bold mb-6 rounded-md placeholder-placeHolder'
					/>
					<p
						className='text-white text-sm font-bold mb-6'
					>
						{textLabel}
					</p>
					{
						dataItem
							? <div
								className={`relative flex items-center h-[2rem] rounded-md ll ${selected.text === textSelect ? 'text-placeHolder' : 'text-white'} text-sm font-bold mb-6`}
								style={{ background: 'rgba(255, 255, 255, 0.03)' }}
							>
								<div
									className={'flex items-center justify-between w-[100%]  px-4  cursor-pointer'}
									onClick={changeOpenSelect}
								>
									<p>
										{selected.text}
									</p>
									<IoIosArrowDown
										className={'ease-in duration-100'}
										style={{ transform: `rotate(${openSelect ? '90deg' : '0deg'})` }}
									/>
								</div>
								<div
									className={`p-4 w-[50%] ease-in duration-100 ${openSelect ? 'hidden' : ''} cursor-default rounded-sm overflow-y-auto h-[159px] absolute z-10 bottom-[-159px] right-0`}
									style={{ background: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(4px)' }}
								>
									{
										dataItem.map((item) => (
											<div
												onClick={() => changeSelected(item.id, item.text)}
												key={item.id}
												className='cursor-pointer group flex gap-4 mb-2 items-center'
											>
												<div
													className='rotate-45 w-3 h-3 border-[1px] flex items-center justify-center border-[#FFFFFF25]'
												>
													<div
														className={`w-[6px] h-[6px] ${selected.id === item.id ? 'bg-borderBtnPrimaryBlue' : ''} group-hover:bg-borderBtnPrimaryBlue`}
													>
													</div>
												</div>
												<p
													className={`flex-1  ${selected.id === item.id ? 'text-white' : 'text-[#FFFFFF70]'} group-hover:text-white`}
												>
													{item.text}
												</p>
											</div>
										))
									}
								</div>

							</div>
							: <input
								placeholder={'Digite o motivo'}
								style={{ background: 'rgba(255, 255, 255, 0.03)' }}
								type="text"
								className='h-[2rem] border-none outline-none px-4 w-full text-white text-sm font-bold mb-6 rounded-md placeholder-placeHolder'
								onChange={(event) => setInputMotive(event.target.value)}
								value={inputMotive}
							/>
					}
					<div className='flex gap-4'>
						<ButtonPrimary
							title={titleBtn}
							bg={'green'}
							onClick={() => console.log(1)}
							height={'3rem'}
						/>
						<ButtonPrimary
							title={'Sair'}
							bg={'red'}
							onClick={exitModal}
							height={'3rem'}
						/>
					</div>
				</div>
			</div>
		</ModalReact >
	);
}
