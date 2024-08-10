import type { IDaytime } from '@entities/schedule/daytimes/types';
import Sequence from '@widgets/lists/sequence/Sequence';
import styles from './Daytime.module.css';
import { flip } from '@src/entities/schedule/daytimes/daytimes.slice';

const Daytime = ({ name, list }: IDaytime) => {
	return (
		<div className={styles.Daytime}>
			<div className={styles.Divider}>
				<h2 className={styles.h2}>{name}</h2>
				<div className={styles.Line}></div>
			</div>

			<div className={styles.Sequences}>
				{list.map((item, i) => {
					return (
						<Sequence
							key={i}
							daytime={name}
							seq={i}
							info={{
								list: item.list,
								timestamps: item.timestamps,
							}}
							context={{
								callback: flip,
								state_key: 'daytimes',
								layout_key: 'list',
							}}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Daytime;
