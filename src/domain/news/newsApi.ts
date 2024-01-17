import { newsMock } from './newsMock';
import { INews } from './types';

async function getNews(): Promise<INews[]> {
	await new Promise(resolve => setTimeout(() => {
		resolve('');
	}, 1000));
	return newsMock;
}

export const newsApi = {
	getNews
};