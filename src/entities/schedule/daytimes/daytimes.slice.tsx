import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DaytimesState {
	[key: string]: { [key: string]: Array<{ [key: string]: Array<boolean> }> };
}

const initialState: DaytimesState = {
	morning: {
		list: [
			{
				list: [false, false],
			},
			{
				list: [false, false, false, false],
			},
			{
				list: [false, false],
			},
			{
				list: [false, false],
			},
		],
	},
	day: {
		list: [
			{
				list: [false, false],
			},
		],
	},
	evening: {
		list: [
			{
				list: [false],
			},
			{
				list: [false, false, false],
			},
		],
	},
};

export const daytimesSlice = createSlice({
	name: 'daytimes',
	initialState,
	reducers: {
		flip: (
			state,
			action: PayloadAction<{ daytime: string; sequence: number; activity: number }>
		) => {
			const { daytime, sequence, activity } = action.payload;

			const new_state = { ...state };
			new_state[daytime].list[sequence].list[activity] =
				!new_state[daytime].list[sequence].list[activity];
			state = { ...new_state };
		},
		reset: (state, action: PayloadAction<boolean>) => {
			const new_state = { ...state };
			for (let daytime in new_state) {
				new_state[daytime].list.map((seq, i) => {
					new_state[daytime].list[i].list.map((act, j) => {
						new_state[daytime].list[i].list[j] = action.payload;
					});
				});
			}
			state = { ...new_state };
		},
	},
});

export type { DaytimesState };

export const { flip, reset } = daytimesSlice.actions;

export default daytimesSlice.reducer;
