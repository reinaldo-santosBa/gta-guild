import { MainArea, Nav, Screen } from '@components';
import React from 'react';
export const Main: React.FC = () => {
	return (
		<Screen>
			<Nav selected={1} />
			<MainArea />
		</Screen>
	);
};