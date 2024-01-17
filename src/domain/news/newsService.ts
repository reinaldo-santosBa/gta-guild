import { newsApi } from './newsApi';
import { INews } from './types';

async function getNews(): Promise<INews[]> {
	const newsList = await newsApi.getNews();
	return newsList;
}

export const newsService = {
	getNews
};