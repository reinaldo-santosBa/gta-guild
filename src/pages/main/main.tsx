import React from 'react';
import { Screen } from '../../components/screen/screen';
import { Nav } from '../../components/nav/nav';

export const Main: React.FC = () => {
	return (
		<Screen>
			<Nav selected={1} />
			<div></div>
		</Screen>
	);
};