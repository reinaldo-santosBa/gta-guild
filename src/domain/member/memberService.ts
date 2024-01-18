import { memberApi } from './memberApi';
import { IMember } from './types';

async function getMember(): Promise<IMember[]> {
	const memberList = await memberApi.getMember();
	return memberList;
}

export const memberService = {
	getMember
};