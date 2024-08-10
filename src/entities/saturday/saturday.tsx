interface IActivity {
	title: string;
	extra?: string;
	icon: string;
	shrink?: boolean;
}

interface ISeq {
	list: IActivity[];
	timestamps: string[];
}

interface ICol {
	list: IActivity[];
}

interface IDaytime {
	name: string;
	list: ISeq[];
	cols: ICol[];
}

const saturday: IDaytime = {
	name: 'saturday',
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
			timestamps: [],
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
			timestamps: [],
		},
	],
	cols: [
		{
			list: [
				{
					title: 'Set 3',
					icon: 'set-three.svg',
				},
				{
					title: 'Francais',
					icon: 'francais.svg',
				},
				{
					title: 'Education',
					icon: 'education.svg',
				},
				{
					title: 'Reading',
					icon: 'reading.svg',
				},
				{
					title: 'Activities',
					icon: 'activities.svg',
				},
			],
		},
		{
			list: [
				{
					title: 'Rest',
					icon: 'rest-large.svg',
				},
			],
		},
	],
};

export type { ICol };

export default saturday;
