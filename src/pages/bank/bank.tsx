import React from 'react';
import { Area, Nav, Screen } from '@components';

export const Bank: React.FC = () => {
	return (
		<Screen>
			<Nav selected={2} />
			<Area
				title='Banco'
				text='Deposite no banco da sua organização e agregue com o crescimento e desenvolvimento da mesma.'
			/>
		</Screen>
	);
};