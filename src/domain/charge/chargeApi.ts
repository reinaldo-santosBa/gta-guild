import { chargeMock } from './chargeMock';
import { Charge } from './types';


async function getCharge(): Promise<Charge[]> {
	await new Promise(resolve => setTimeout(() => {
		resolve('');
	}, 1000));
	return chargeMock;
}

export const chargeApi = {
	getCharge
};