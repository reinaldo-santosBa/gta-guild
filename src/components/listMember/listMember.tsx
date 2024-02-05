import React, { useEffect, useState } from 'react';
import { IMember, memberService } from '@domain';
import { Member } from './member/member';
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
					memberList.map((member, index) => (
						<Member key={index} {...member} />
					))
				}
			</div>

		</div>
	);
};