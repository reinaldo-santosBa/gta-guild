import React, { useEffect, useState } from 'react';
import { AreaChildren } from './areaChildrens/areaChildrens';
import { News } from './news/news';
import { v4 as uuidv4 } from 'uuid';
import { INews, IPenalties, newsService, penaltiesService } from '@domain';
import { Penailtities } from './penalties/penalties';
import { PulseLoader } from 'react-spinners';
export const NewsPenaltiesArea: React.FC = () => {
	const [news, setNews] = useState<INews[]>([]);
	const [penalties, setPenalties] = useState<IPenalties[]>([]);
	const [penaltiesLength, setPenaltiesLength] = useState(0);
	const [newsLength, setNewsLength] = useState(0);


	const [loading, setLoading] = useState(true);
	useEffect(() => {
		(
			async () => {
				const newsList = await newsService.getNews();
				const penaltiesList = await penaltiesService.getPenalties();
				setNews(newsList);
				setPenalties(penaltiesList);
				setPenaltiesLength(penaltiesList.length);
				setNewsLength(newsList.length);
				setLoading(false);
			}
		)();
	});
	return (
		<div className='flex flex-1 flex-row'>
			<div className='flex flex-none gap-8 w-full h-min'>
				{
					loading
						? <div className={'flex flex-col gap-1 flex-1 h-min bg-bgContrast rounded-xl px-4 py-2'}>
							<PulseLoader color='#FFFFFF' />
						</div>
						:
						news.length > 0 ?
							<AreaChildren title='Noticiais da organização'
								length={newsLength}>
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
							</AreaChildren>
							: <div className={'flex flex-col gap-1 flex-1 h-min bg-bgContrast rounded-xl px-4 py-2'}>
								<p>Sem dados para serem exibidos</p>
							</div>
				}
				{
					loading
						? <div className={'flex flex-col gap-1 flex-1 h-min bg-bgContrast rounded-xl px-4 py-2'}>
							<PulseLoader color='#FFFFFF' />
						</div>
						:
						penalties.length > 0 ?
							<AreaChildren halfPosition title='Suas Penalidades' length={penaltiesLength}>
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
							: <div className={'flex flex-col gap-1 flex-1 h-min bg-bgContrast rounded-xl px-4 py-2'}>
								<p>Sem dados para serem exibidos</p>
							</div>

				}
			</div >
		</div >
	);
};