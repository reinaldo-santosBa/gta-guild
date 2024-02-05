import { chargeApi } from './chargeApi';
import { Charge } from './types';

async function getCharge(): Promise<Charge[]> {
	const chargeList = await chargeApi.getCharge();
	return chargeList;
}

export const chargeService = {
	getCharge
};