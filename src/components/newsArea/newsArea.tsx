import React, { useEffect, useState } from 'react';
import { AreaChildren } from './areaChildrens/areaChildrens';
import { News } from './news/news';
import { v4 as uuidv4 } from 'uuid';
import { INews, IPenalties, newsService, penaltiesService } from '@domain';
import { Penailtities } from './penalties/penalties';
export const NewsPenaltiesArea: React.FC = () => {
	const [news, setNews] = useState<INews[]>([]);
	const [penalties, setPenalties] = useState<IPenalties[]>([]);
	useEffect(() => {
		(
			async () => {
				const newsList = await newsService.getNews();
				setNews(newsList);
				const penaltiesList = await penaltiesService.getPenalties();
				setPenalties(penaltiesList);
			}
		)();
	});
	return (
		<div className='flex flex-1 flex-row'>
			<div className='flex flex-none gap-8 w-full h-min'>
				<AreaChildren
					title='Noticiais da organização'
					length={news.length}
				>
					{
						news.map((item) => (
							<News
								key={uuidv4()}
								img={item.img}
								name={item.name}
								office={item.office}
								news={item.news}
								id={item.id}
							/>
						))
					}
				</AreaChildren >

				<AreaChildren halfPosition title='Suas Penalidades' length={penalties.length}>
					{
						penalties.map((item) => (
							<Penailtities
								id={item.id}
								key={uuidv4()}
								data={item.data}
								author={item.author}
								violation={item.violation}
							/>
						))
					}
				</AreaChildren>
			</div >
		</div >
	);
};