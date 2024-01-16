import { Nav, Screen } from '@components';
import React from 'react';

export const Route: React.FC = () => {
	return (
		<Screen>
			<Nav selected={5} />
			<div></div>
		</Screen>
	);
};