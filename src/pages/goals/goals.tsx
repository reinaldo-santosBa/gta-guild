import React from 'react';
import { Screen } from '../../components/screen/screen';
import { Nav } from '../../components/nav/nav';

export const Goals: React.FC = () => {
	return (
		<Screen>
			<Nav selected={3} />
			<div></div>
		</Screen>
	);
};