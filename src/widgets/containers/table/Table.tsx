import { events, week } from '@entities/schedule/week/week';
import type { icons } from '@entities/schedule/week/week';
import { useRef, useState } from 'react';
import styles from './Table.module.css';
import turn_small from '@assets/icons/turn-small.svg';
import Flippable from '@widgets/containers/flippable/Flippable';
import { useAppDispatch, useAppSelector } from '@src/hooks';
import { flip, reset } from '@entities/schedule/week/week.slice';

interface ITable {
	icons: typeof icons;
}

const Table = ({ icons }: ITable) => {
	const week_state = useAppSelector((state) => state.week);
	const dispatch = useAppDispatch();

	const all = useRef(false);

	const [selected, setSelected] = useState('');

	return (
		<table className={styles.Table}>
			<tbody>
				<tr className={styles.tr}>
					<th className={styles.th}>
						<button
							className={styles.Reset}
							onClick={() => {
								all.current = !all.current;
								dispatch(reset(all.current));
							}}
						>
							<img src={turn_small} />
						</button>
					</th>
					{Object.values(week).map((day, j) => {
						return (
							<th
								key={j}
								className={styles.FirstRow + ' ' + styles.th}
								onClick={() => setSelected(day)}
							>
								<div className={styles.Day + (selected == day ? ' selected' : '')}>
									{day}
								</div>
							</th>
						);
					})}
				</tr>
				{Object.values(events).map((event, i) => {
					return (
						<tr
							className={styles.tr}
							key={i}
						>
							<td className={styles.FirstColumn + ' ' + styles.td}>{event}</td>
							{Object.values(week).map((day, j) => {
								return (
									<td
										key={j}
										className={styles.td}
									>
										{event in icons && icons[event][day] ? (
											<Flippable
												callback={() => {
													dispatch(flip({ event: event, day: day }));
												}}
												front={
													<div className={styles.ClosedCell}>
														<img src={'src/assets/icons/mark.svg'} />
													</div>
												}
												back={
													<img
														src={
															'src/assets/icons/' + icons[event][day]
														}
													/>
												}
												outer_styles={{
													Flippable: styles.Flippable,
													Inner:
														styles.Inner +
														' ' +
														(week_state[event][day] ? ' active' : ''),
													Front: styles.Front,
													Back: styles.Back,
												}}
											/>
										) : (
											''
										)}
									</td>
								);
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Table;
