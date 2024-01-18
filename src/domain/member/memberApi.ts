import { memberMock } from './memberMock';
import { IMember } from './types';

async function getMember(): Promise<IMember[]> {
	await new Promise(resolve => setTimeout(() => {
		resolve('');
	}, 1000));
	return memberMock;
}

export const memberApi = {
	getMember
};