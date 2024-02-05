import { Area, Nav, Screen } from '@components';
import React from 'react';

export const Route: React.FC = () => {
	return (
		<Screen>
			<Nav selected={5} />
			<Area
				text='Aqui você poderá iniciar suas rotas, sozinho ou em grupo, e também verificar item por item da sua meta diária, obtendo seu progresso até completar o mesmo.'
				title='Rotas'
			/>
		</Screen>
	);
};