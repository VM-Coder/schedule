import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SaturdayState {
	[key: string]: {
		[key: string]: Array<{ [key: string]: Array<boolean> }>;
	};
}

const initialState: SaturdayState = {
	saturday: {
		list: [
			{
				list: [false, false],
			},
			{
				list: [false, false, false, false],
			},
		],
		cols: [
			{
				list: [false, false, false, false, false],
			},
			{
				list: [false],
			},
		],
	},
};

export const saturdaySlice = createSlice({
	name: 'saturday',
	initialState,
	reducers: {
		flip: (
			state,
			action: PayloadAction<{ sequence?: number; column?: number; activity: number }>
		) => {
			const { sequence, column, activity } = action.payload;

			const new_state = { ...state };
			console.log(sequence + ' ' + activity);
			if (sequence != undefined) {
				new_state.saturday.list[sequence].list[activity] =
					!new_state.saturday.list[sequence].list[activity];
			} else if (column != undefined) {
				new_state.saturday.cols[column].list[activity] =
					!new_state.saturday.cols[column].list[activity];
			}

			state = { ...new_state };
		},
		reset: (state, action: PayloadAction<boolean>) => {
			const new_state = { ...state };
			for (let key in new_state.saturday) {
				new_state.saturday[key].map((seq, i) => {
					new_state.saturday[key][i].list.map((act, j) => {
						new_state.saturday[key][i].list[j] = action.payload;
					});
				});
			}

			state = { ...new_state };
		},
	},
});

export type { SaturdayState };

export const { flip, reset } = saturdaySlice.actions;

export default saturdaySlice.reducer;
