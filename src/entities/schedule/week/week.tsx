const events = {
	1: 'Training',
	2: 'Rest',
	3: 'Purchases',
	4: 'Laundry',
	5: 'Cleaning',
	6: 'Bathing',
};

const week = {
	1: 'Sun',
	2: 'Mon',
	3: 'Tue',
	4: 'Wed',
	5: 'Thu',
	6: 'Fri',
	7: 'Sat',
};

const icons: { [key: string]: { [key: string]: string } } = {
	Training: {
		Mon: 'training-mon.svg',
		Tue: 'training-tue.svg',
		Wed: 'training-wed.svg',
		Thu: 'training-thu.svg',
		Fri: 'training-fri.svg',
	},
	Rest: {
		Sat: 'rest.svg',
	},
	Purchases: {
		Sun: 'purchases.svg',
	},
	Laundry: {
		Tue: 'laundry.svg',
		Fri: 'laundry.svg',
	},
	Cleaning: {
		Fri: 'cleaning.svg',
	},
	Bathing: {
		Fri: 'bathing.svg',
	},
};

export type { icons };

export { events, week };

export default icons;
