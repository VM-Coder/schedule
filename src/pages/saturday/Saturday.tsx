import Header from '@widgets/layout/header/Header';
import { flip, reset } from '@entities/saturday/saturday.slice';
import Content from '@widgets/layout/content/Content';
import Sequence from '@widgets/lists/sequence/Sequence';
import styles from './Saturday.module.css';
import saturday from '@entities/saturday/saturday';
import Column from '@widgets/lists/column/Column';

const Saturday = () => {
	const content = () => {
		return (
			<>
				<div className={styles.Column}>
					{saturday.list.map((item, i) => {
						return (
							<Sequence
								key={i}
								daytime='saturday'
								seq={i}
								info={{ list: item.list, timestamps: item.timestamps }}
								context={{
									callback: flip,
									state_key: 'saturday',
									layout_key: 'list',
								}}
							/>
						);
					})}
					<div className={styles.Subcolumn}>
						{saturday.cols.map((item, i) => {
							return (
								<Column
									key={i}
									col={i}
									info={item}
								/>
							);
						})}
					</div>
				</div>
			</>
		);
	};

	return (
		<>
			<Header
				name='SATURDAY'
				link='schedule'
				callback={reset}
			/>
			<Content child={content()} />
		</>
	);
};

export default Saturday;
