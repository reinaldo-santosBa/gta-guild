import { Nav, Screen } from '@components';
import React from 'react';

export const Goals: React.FC = () => {
	return (
		<Screen>
			<Nav selected={3} />
			<div></div>
		</Screen>
	);
};