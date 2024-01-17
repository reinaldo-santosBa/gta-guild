import { Avatar } from '@assets';
import { INews } from './types';

export const newsMock: INews[] = [
	{
		img: Avatar,
		name: 'John doe',
		office: 'manager',
		news: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab fugit obcaecati placeat nisi officiis voluptatum esse autem eligendi error quisquam! Magni, aspernatur recusandae? Vitae saepe perspiciatis aut aspernatur ipsam numquam?',
	},
	{
		img: Avatar,
		name: 'Dude man',
		office: 'leader',
		news: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab fugit obcaecati placeat nisi officiis voluptatum esse autem eligendi error quisquam! Magni, aspernatur recusandae? Vitae saepe perspiciatis aut aspernatur ipsam numquam?',
	}
];