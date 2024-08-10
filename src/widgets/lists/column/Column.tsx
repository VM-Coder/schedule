import Card from '@widgets/containers/card/Card';
import styles from './Column.module.css';
import { ICol } from '@entities/saturday/saturday';
import { flip } from '@entities/saturday/saturday.slice';

interface IColumn {
	col: number;
	info: ICol;
}

const Column = ({ col, info }: IColumn) => {
	return (
		<div className={styles.Column}>
			<div className={styles.Activities}>
				{info.list.map((item, i) => {
					return (
						<Card
							key={i}
							daytime='saturday'
							seq={col}
							act={i}
							icon={item.icon}
							child={
								<div className={styles.Activity}>
									<h3 className={styles.Title}>{item.title}</h3>{' '}
									{item.extra && <h3 className={styles.Extra}>{item.extra}</h3>}
								</div>
							}
							context={{
								callback: flip,
								state_key: 'saturday',
								layout_key: 'cols',
								args: {
									column: col,
									activity: i,
								},
							}}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Column;
