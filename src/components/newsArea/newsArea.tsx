import React from 'react';
import { AreaChildren } from './areaChildrens/areaChildrens';
import Avatar from '../../assets/Avatar.svg';
import { News } from './news/news';
export const NewsArea: React.FC = () => {
	return (
		<div className='flex flex-none gap-8 w-full h-min'>
			<AreaChildren
				title='Noticiais da organização'
			>
				<News
					img={Avatar}
					name={'John doe'}
					office={'manager'}
					news={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab fugit obcaecati placeat nisi officiis voluptatum esse autem eligendi error quisquam! Magni, aspernatur recusandae? Vitae saepe perspiciatis aut aspernatur ipsam numquam?'}
				/>
				<News
					img={Avatar}
					name={'dude man'}
					office={'leader'}
					news={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ducimus omnis iusto veniam minus. Sequi at molestiae maxime debitis asperiores, possimus et, nisi consectetur autem praesentium fugiat non alias doloribus?'}

				/>

			</AreaChildren >
			<AreaChildren title='Suas Penalidades'>
				<div></div>
				<div></div>
			</AreaChildren>
		</div >
	);
};