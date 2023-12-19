import MainIcon from '../../assets/icons/main.svg';
import BankIcon from '../../assets/icons/bank.svg';
import GoalsIcon from '../../assets/icons/goals.svg';
import RankingIcon from '../../assets/icons/ranking.svg';
import RoutesIcon from '../../assets/icons/routes.svg';
import ComunicationIcon from '../../assets/icons/comunication.svg';
import MainSelectedIcon from '../../assets/icons/mainSelected.svg';
import BankSelectedIcon from '../../assets/icons/bankSelected.svg';
import GoalsSelectedIcon from '../../assets/icons/goalsSelected.svg';
import RankingSelectedIcon from '../../assets/icons/rankingSelected.svg';
import RoutesSelectedIcon from '../../assets/icons/routesSelected.svg';
import ComunicationSelectedIcon from '../../assets/icons/comunicationSelected.svg';

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