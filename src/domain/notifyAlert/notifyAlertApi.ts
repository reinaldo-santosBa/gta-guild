import { notifyAlertMock } from './notifyAlertMock';
import { NotifyAlertTypes } from './types';

async function getNotifyAlert(): Promise<NotifyAlertTypes[]> {
	await new Promise(resolve => setTimeout(() => {
		resolve('');
	}, 1000));
	return notifyAlertMock;
}

export const notifyAlertApi = {
	getNotifyAlert
};