import React from 'react';
import { Screen } from '../../components/screen/screen';
import { Nav } from '../../components/nav/nav';

export const Comunication: React.FC = () => {
	return (
		<Screen>
			<Nav selected={6} />
			<div></div>
		</Screen>
	);
};