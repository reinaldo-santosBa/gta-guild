import { Charge, Motive } from '@domain';

export const adaptarToSelect = (data: Charge[] | Motive[]) => {
	const array: { id: number; text: string }[] = [];
	data.map((item) => {
		if ('charge' in item) {
			array.push({
				id: item.id,
				text: item.charge
			});
		} else {
			array.push({
				id: item.id,
				text: item.motive
			});
		}

	});
	return array;
};