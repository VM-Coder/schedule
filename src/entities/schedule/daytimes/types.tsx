interface IActivityList {
	title: string;
	list: string[];
	direction: 'vertical' | 'horizontal';
	icon: string;
	shrink?: boolean;
}

interface IActivity {
	title: string;
	extra?: string;
	icon: string;
	shrink?: boolean;
}

interface ISeq {
	list: IActivity[] | IActivityList[];
	timestamps: string[];
}

interface IDaytime {
	name: string;
	list: ISeq[];
}

export type { IActivityList, IActivity, ISeq, IDaytime };
