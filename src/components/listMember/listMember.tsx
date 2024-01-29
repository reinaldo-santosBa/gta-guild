import React, { useEffect, useState } from 'react';
import { IMember, memberService } from '@domain';
import { v4 } from 'uuid';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { ImExit } from 'react-icons/im';

import { ButtonTable } from '../buttonTable/buttonTable';
export const ListMember: React.FC = () => {
	const [memberList, setMemberList] = useState<IMember[]>([]);
	useEffect(() => {
		(
			async () => {
				const member = await memberService.getMember();
				setMemberList(member);
			}
		)();
	}, []);
	const promotion = () => {
		console.log('p');

	};
	return (
		<div className='flex flex-col flex-[6] w-full mt-4 max-h-full overflow-auto'>
			<div className='w-full h-full py-4'>
				{
					memberList.map((member) => (
						<div key={v4()} className='flex mb-4'>
							<div className='flex flex-1 justify-center items-center text-white'>
								<p>{member.id}</p>
							</div>
							<div className='flex flex-1 justify-center items-center text-white'>
								<p>{member.dailyGoal}</p>
							</div>
							<div className='flex flex-1 justify-center items-center text-white'>
								<p>{member.lastAccess}</p>
							</div>
							<div className='flex flex-1 justify-center items-center text-white'>
								<p>{member.name}</p>
							</div>
							<div className='flex flex-1 justify-center items-center text-white'>
								<p>{member.office}</p>
							</div>
							<div className='flex flex-1 justify-center items-center text-white'>
								<p>{member.timeOfOrg}</p>
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
									onClick={promotion}
								/>
								<ButtonTable
									icon={<ImExit />}
									text={'Demitir'}
									bg={'red'}
									onClick={promotion}
								/>
							</div>
						</div>
					))
				}
			</div>
		</div>
	);
};