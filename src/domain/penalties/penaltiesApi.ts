import { penaltiesMock } from './penaltiesMock';
import { IPenalties } from './types';

async function getPenalties(): Promise<IPenalties[]> {
	await new Promise(resolve => setTimeout(() => {
		resolve('');
	}, 1000));
	return penaltiesMock;
}

export const penaltiesApi = {
	getPenalties
};