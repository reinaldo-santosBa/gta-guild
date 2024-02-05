import { motiveMock } from './motiveMock';
import { Motive } from './types';


async function getMotive(): Promise<Motive[]> {
	await new Promise(resolve => setTimeout(() => {
		resolve('');
	}, 1000));
	return motiveMock;
}

export const motiveApi = {
	getMotive
};