import { ReactNode } from 'react';
import type { ISeq, IActivity, IActivityList } from '@entities/schedule/daytimes/types';
import Card from '@widgets/containers/card/Card';
import styles from './Sequence.module.css';

interface ISequence {
	daytime: string;
	seq: number;
	info: ISeq;
	context: {
		callback: Function;
		state_key: 'saturday' | 'daytimes';
		layout_key: 'cols' | 'list';
	};
}

const Sequence = ({ daytime, seq, info, context }: ISequence) => {
	const getChild = (item: IActivity | IActivityList): ReactNode => {
		if ('list' in item) {
			return (
				<div className={styles.ActivityList}>
					<h3 className={styles.Title}>{item.title}</h3>
					<ol
						className={
							styles.OrderedList +
							(item.direction === 'horizontal' ? ' horizontal' : '')
						}
					>
						{item.list.map((point, i) => {
							return (
								<li
									key={i}
									className={styles.ListItem}
								>
									{point}
								</li>
							);
						})}
					</ol>
				</div>
			);
		} else {
			return (
				<div className={styles.Activity}>
					<h3 className={styles.Title}>{item.title}</h3>{' '}
					{item.extra && <h3 className={styles.Extra}>{item.extra}</h3>}
				</div>
			);
		}
	};

	return (
		<div className={styles.Sequence}>
			<div className={styles.Activities}>
				{info.list.map((item, i) => {
					return (
						<Card
							key={i}
							daytime={daytime}
							seq={seq}
							act={i}
							icon={item.icon}
							shrink={item.shrink}
							child={getChild(item)}
							arrow={i < info.list.length - 1}
							context={Object.assign(
								{ ...context },
								{
									args:
										context.state_key === 'daytimes'
											? { daytime: daytime, sequence: seq, activity: i }
											: { sequence: seq, activity: i },
								}
							)}
						/>
					);
				})}
			</div>
			<div className={styles.Timestamps}>
				{info.timestamps.map((item, i) => {
					return (
						<p
							key={i}
							className={styles.Timestamp}
						>
							{item}
						</p>
					);
				})}
			</div>
		</div>
	);
};

export default Sequence;
