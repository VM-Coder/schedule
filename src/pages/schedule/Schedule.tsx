import Header from '@widgets/layout/header/Header';
import Card from '@widgets/containers/card/Card';
import Daytime from '@widgets/containers/daytime/Daytime';
import morning from '@entities/schedule/daytimes/morning/morning';
import day from '@entities/schedule/daytimes/day/day';
import evening from '@entities/schedule/daytimes/evening/evening';
import Content from '@widgets/layout/content/Content';
import styles from './Schedule.module.css';
import Table from '@widgets/containers/table/Table';
import icons from '@entities/schedule/week/week';
import { reset } from '@src/entities/schedule/daytimes/daytimes.slice';

const Schedule = () => {
	const content = () => {
		return (
			<>
				<div className={styles.Column}>
					<Daytime
						name={morning.name}
						list={morning.list}
					/>
					<Daytime
						name={day.name}
						list={day.list}
					/>
				</div>
				<div className={styles.Column}>
					<Daytime
						name={evening.name}
						list={evening.list}
					/>
					<Table icons={icons} />
				</div>
			</>
		);
	};

	return (
		<>
			<Header
				name='SCHEDULE'
				link='saturday'
				callback={reset}
			/>
			<Content child={content()} />
		</>
	);
};

export default Schedule;
