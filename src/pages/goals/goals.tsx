import { Area, Nav, Screen } from '@components';
import React from 'react';

export const Goals: React.FC = () => {
	return (
		<Screen>
			<Nav selected={3} />
			<Area
				text='Aqui você poderá conferir os itens da sua meta diária com fotos e qual a quantidade necessária para que você conclua, de forma detalhada e simples a sua meta.'
				title='Metas'
			/>
		</Screen>
	);
};