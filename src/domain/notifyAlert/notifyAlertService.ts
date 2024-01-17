import { notifyAlertApi } from './notifyAlertApi';
import { NotifyAlertTypes } from './types';

async function getNotifyAlert(): Promise<NotifyAlertTypes[]> {
	const notifyAlertList = await notifyAlertApi.getNotifyAlert();
	return notifyAlertList;
}

export const notifyAlertService = {
	getNotifyAlert
};