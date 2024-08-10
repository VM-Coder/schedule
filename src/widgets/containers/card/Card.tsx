import { ReactNode, useState } from 'react';
import styles from './Card.module.css';
import Flippable from '@widgets/containers/flippable/Flippable';
import { useAppDispatch, useAppSelector } from '@src/hooks';

interface ICard {
	daytime: string;
	seq: number;
	act: number;
	icon: string;
	shrink?: boolean;
	child: ReactNode;
	arrow?: boolean;
	context: {
		callback: Function;
		state_key: 'saturday' | 'daytimes';
		layout_key: 'cols' | 'list';
		args: object;
	};
}

const Card = ({ daytime, seq, act, icon, shrink, child, arrow, context }: ICard) => {
	const active = useAppSelector((state) => state[context.state_key])[daytime][context.layout_key][
		seq
	].list[act];
	const dispatch = useAppDispatch();

	return (
		<>
			<Flippable
				arrow={arrow}
				callback={() => dispatch(context.callback(context.args))}
				front={
					<img
						className={styles.Image}
						src={'src/assets/icons/' + icon}
					/>
				}
				back={<div className={styles.Content}>{child}</div>}
				outer_styles={{
					Flippable: styles.Card + (shrink ? ' shrink' : ''),
					Inner: styles.Inner + (active ? ' active' : ''),
					Front: styles.Front,
					Back: styles.Back,
				}}
			/>
		</>
	);
};

export default Card;
