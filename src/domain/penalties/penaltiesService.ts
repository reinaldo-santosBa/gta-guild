import { penaltiesApi } from './penaltiesApi';
import { IPenalties } from './types';

async function getPenalties(): Promise<IPenalties[]> {
	const penaltiesList = await penaltiesApi.getPenalties();
	return penaltiesList;
}

export const penaltiesService = {
	getPenalties
};