import { Area, Nav, Screen } from '@components';
import React from 'react';

export const Ranking: React.FC = () => {
	return (
		<Screen>
			<Nav selected={4} />
			<Area
				text='Seja um ganhador, participe da corrida ao sucesso e conquiste premiações incríveis para sua organização.'
				title='Ranking'
			/>
		</Screen>
	);
};