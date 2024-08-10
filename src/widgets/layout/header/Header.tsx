import styles from './Header.module.css';
import turn_large from '@assets/icons/turn-large.svg';
import next from '@assets/icons/next.svg';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';

interface IHeader {
	name: string;
	link: string;
	callback: Function;
}

const Header = ({ name, link, callback }: IHeader) => {
	const dispatch = useDispatch();

	const all = useRef(false);

	return (
		<header className={styles.Header}>
			<a
				className={styles.Button}
				href={'../' + link}
			>
				<img src={next} />
			</a>
			<h1 className={styles.h1}>{name}</h1>
			<button
				className={styles.Button}
				onClick={() => {
					all.current = !all.current;
					dispatch(callback(all.current));
				}}
			>
				<img src={turn_large} />
			</button>
		</header>
	);
};

export default Header;
