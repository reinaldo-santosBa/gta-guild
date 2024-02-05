import { motiveApi } from './motiveApi';
import { Motive } from './types';

async function getMotive(): Promise<Motive[]> {
	const motiveList = await motiveApi.getMotive();
	return motiveList;
}

export const motiveService = {
	getMotive
};