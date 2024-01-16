import React from 'react';
interface ITitle {
	title: string
}
export const TextTittle18px: React.FC<ITitle> = ({ title }) => {
	return (
		<>
			<p className='text-white font-semibold text-lg'>{title}</p>
		</>
	);
};