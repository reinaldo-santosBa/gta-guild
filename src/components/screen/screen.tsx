import React from 'react';
interface IScreen {
	children: React.ReactNode[]
}

export const Screen: React.FC<IScreen> = ({ children }) => {
	return (
		<section className=' flex bg-imgBg bg-cover bg-no-repeat bg-center w-screen h-screen overflow-hidden overflow-x-hidden'>
			{children}
		</section>
	);
};