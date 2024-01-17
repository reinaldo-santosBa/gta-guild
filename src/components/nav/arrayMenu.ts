import {
	MainIcon,
	BankIcon,
	GoalsIcon,
	RankingIcon,
	RankingSelectedIcon,
	RoutesIcon,
	ComunicationIcon,
	MainSelectedIcon,
	GoalsSelectedIcon,
	BankSelectedIcon,
	RoutesSelectedIcon,
	ComunicationSelectedIcon
} from '@assets';


export const arrayMenu = [
	{
		id: 1,
		icon: MainIcon,
		iconSelected: MainSelectedIcon,
		text: 'Principal',
		link: 'main'
	},
	{
		id: 2,
		icon: BankIcon,
		iconSelected: BankSelectedIcon,
		text: 'Banco',
		link: 'bank'
	},
	{
		id: 3,
		icon: GoalsIcon,
		iconSelected: GoalsSelectedIcon,
		text: 'Metas',
		link: 'goals'
	},
	{
		id: 4,
		icon: RankingIcon,
		iconSelected: RankingSelectedIcon,
		text: 'Ranking',
		link: 'ranking'
	},
	{
		id: 5,
		icon: RoutesIcon,
		iconSelected: RoutesSelectedIcon,
		text: 'Rotas',
		link: 'route'
	},
	{
		id: 6,
		icon: ComunicationIcon,
		iconSelected: ComunicationSelectedIcon,
		text: 'Comunicação',
		link: 'comunication'
	},
];