import type { IDaytime } from '../types';

const evening: IDaytime = {
	name: 'evening',
	list: [
		{
			list: [
				{
					title: 'English',
					list: ['Reading aloud', 'Vocabulary', 'Playlist', 'Watching'],
					direction: 'horizontal',
					icon: 'english-small.svg',
				},
			],
			timestamps: ['19:00'],
		},
		{
			list: [
				{
					title: 'Supper',
					icon: 'supper.svg',
				},
				{
					title: 'Free time',
					icon: 'free-time.svg',
				},
				{
					title: 'Sleep',
					icon: 'sleep.svg',
				},
			],
			timestamps: ['20:00', '21:00', '22:30'],
		},
	],
};

export default evening;
