import type { IDaytime } from '../types';

const morning: IDaytime = {
	name: 'morning',
	list: [
		{
			list: [
				{
					title: 'Set 1',
					icon: 'set-one.svg',
				},
				{
					title: 'Set 2',
					icon: 'set-two.svg',
				},
			],
			timestamps: ['6:00'],
		},
		{
			list: [
				{
					title: 'Exercises',
					extra: 'Fruit',
					icon: 'exercises.svg',
				},
				{
					title: 'Running',
					extra: 'Training',
					icon: 'running.svg',
				},
				{
					title: 'Breakfast',
					extra: 'Shower',
					icon: 'breakfast.svg',
				},
				{
					title: 'Meditation',
					extra: 'Breathing',
					icon: 'meditation.svg',
				},
			],
			timestamps: ['6:05'],
		},
		{
			list: [
				{
					title: 'Development',
					list: ['Talking', 'Left hand', 'Touch typing', 'Speed reading', 'Book'],
					direction: 'vertical',
					icon: 'development.svg',
				},
				{
					title: 'English',
					list: ['Vocabulary', 'Writing', 'Topic', 'Talking'],
					direction: 'vertical',
					icon: 'english-large.svg',
				},
			],
			timestamps: ['8:00', '9:00'],
		},
		{
			list: [
				{
					title: '2nd Breakfast',
					icon: '2nd-breakfast.svg',
					shrink: true,
				},
				{
					title: 'Work',
					icon: 'work.svg',
				},
			],
			timestamps: ['10:00', '10:30'],
		},
	],
};

export default morning;
