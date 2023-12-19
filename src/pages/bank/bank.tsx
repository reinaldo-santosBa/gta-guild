import React from 'react';
import { Screen } from '../../components/screen/screen';
import { Nav } from '../../components/nav/nav';

export const Bank: React.FC = () => {
	return (
		<Screen>
			<Nav selected={2} />
			<div></div>
		</Screen>
	);
};