import React, { useEffect, useState } from 'react';
import { IMember, memberService } from '@domain';
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
	return (
		<div className='flex flex-col flex-[6] w-full mt-4 max-h-full overflow-auto'>
			<div className='w-full h-full py-4'>
				{
					memberList.map((member) => (
						<div key={member.id} className='flex'>
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
							<div className='flex flex-[3] justify-center items-center text-white'></div>
						</div>
					))
				}
			</div>
		</div>
	);
};