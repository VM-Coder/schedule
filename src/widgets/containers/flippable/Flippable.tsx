import { ReactNode } from 'react';
import styles from './Flippable.module.css';

interface IFlippable {
	arrow?: boolean;
	callback: Function;
	front: ReactNode;
	back: ReactNode;
	outer_styles: {
		Flippable: string;
		Inner: string;
		Front: string;
		Back: string;
	};
}
const Flippable = ({ arrow, callback, front, back, outer_styles }: IFlippable) => {
	return (
		<div
			onClick={() => callback()}
			className={styles.Flippable + ' ' + outer_styles.Flippable}
		>
			<div className={styles.Inner + ' ' + outer_styles.Inner}>
				<div className={styles.Front + ' ' + outer_styles.Front}>{front}</div>
				<div className={styles.Back + ' ' + outer_styles.Back}>{back}</div>
			</div>
			{arrow && (
				<img
					className={styles.Arrow}
					src='src/assets/icons/arrow.svg'
				/>
			)}
		</div>
	);
};

export default Flippable;
