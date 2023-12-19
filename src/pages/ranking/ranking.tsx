import React from 'react';
import { Screen } from '../../components/screen/screen';
import { Nav } from '../../components/nav/nav';

export const Ranking: React.FC = () => {
	return (
		<Screen>
			<Nav selected={4} />
			<div></div>
		</Screen>
	);
};