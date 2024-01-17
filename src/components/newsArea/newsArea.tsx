import React, { useEffect, useState } from 'react';
import { AreaChildren } from './areaChildrens/areaChildrens';
import { News } from './news/news';
import { INews, newsService } from '@domain';
export const NewsArea: React.FC = () => {
	const [news, setNews] = useState<INews[]>([]);
	useEffect(() => {
		(
			async () => {
				const newsList = await newsService.getNews();
				setNews(newsList);
			}
		)();
	});
	return (
		<div className='flex flex-none gap-8 w-full h-min'>
			<AreaChildren
				title='Noticiais da organização'
			>
				{
					news.map((item, index) => (
						<News
							key={index}
							img={item.img}
							name={item.name}
							office={item.office}
							news={item.news}
						/>
					))
				}
			</AreaChildren >
			<AreaChildren title='Suas Penalidades'>
				<div></div>
				<div></div>
			</AreaChildren>
		</div >
	);
};