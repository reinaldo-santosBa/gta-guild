import React from 'react';
import { Area, Nav, Screen } from '@components';

export const Comunication: React.FC = () => {
	return (
		<Screen>
			<Nav selected={6} />
			<Area
				title='Comunicação'
				text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
			/>
		</Screen>
	);
};