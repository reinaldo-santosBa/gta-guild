import React from 'react';
import { Screen } from '../../components/screen/screen';
import { Nav } from '../../components/nav/nav';

export const Route: React.FC = () => {
	return (
		<Screen>
			<Nav selected={5} />
			<div></div>
		</Screen>
	);
};