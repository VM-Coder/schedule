import type { IDaytime } from '../types';

const day: IDaytime = {
	name: 'day',
	list: [
		{
			list: [
				{ title: 'Dinner', icon: 'dinner.svg', shrink: true },
				{ title: 'Work', icon: 'work.svg' },
			],
			timestamps: ['13:00', '14:00'],
		},
	],
};

export default day;
