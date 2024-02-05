import React from 'react';
import { Face } from '@assets';

export function Profile(): React.ReactElement {
	return (<>
		<div className="flex flex-1 gap-[.625rem] justify-center items-center">
			<img src={Face} alt="" className='w-[2rem] h-[2rem]' />
			<p className='text-white text-[.8rem] font-medium font-helveticaNeue'>Pixelz Warrios</p>
		</div>
	</>);
}