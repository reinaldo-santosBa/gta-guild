import React from 'react';
interface ITitle {
	title: string
}
export const TextTiel18px: React.FC<ITitle> = ({ title }) => {
	return (
		<>
			<p className='text-white font-semibold text-lg'>{title}</p>
		</>
	);
};