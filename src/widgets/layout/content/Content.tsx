import { ReactNode } from 'react';
import styles from './Content.module.css';

interface IContent {
	child: ReactNode;
}

const Content = ({ child }: IContent) => {
	return <section className={styles.Section}>{child}</section>;
};

export default Content;
