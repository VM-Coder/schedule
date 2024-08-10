import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WeekState {
	[key: string]: { [key: string]: boolean };
}

const initialState: WeekState = {
	Training: {
		Mon: false,
		Tue: false,
		Wed: false,
		Thu: false,
		Fri: false,
	},
	Rest: {
		Sat: false,
	},
	Purchases: {
		Sun: false,
	},
	Laundry: {
		Tue: false,
		Fri: false,
	},
	Cleaning: {
		Fri: false,
	},
	Bathing: {
		Fri: false,
	},
};

export const weekSlice = createSlice({
	name: 'week',
	initialState,
	reducers: {
		flip: (state, action: PayloadAction<{ event: string; day: string }>) => {
			const { event, day } = action.payload;

			const new_state = { ...state };
			new_state[event][day] = !new_state[event][day];
			state = { ...new_state };
		},
		reset: (state, action: PayloadAction<boolean>) => {
			const new_state = { ...state };
			for (let event in new_state) {
				for (let day in new_state[event]) {
					new_state[event][day] = action.payload;
				}
			}
			state = { ...new_state };
		},
	},
});

export type { WeekState };

export const { flip, reset } = weekSlice.actions;

export default weekSlice.reducer;
