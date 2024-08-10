import { configureStore } from '@reduxjs/toolkit';
import weekReducer from '@entities/schedule/week/week.slice';
import daytimesReducer from '@entities/schedule/daytimes/daytimes.slice';
import saturdayReducer from '@entities/saturday/saturday.slice';

export const store = configureStore({
	reducer: {
		week: weekReducer,
		daytimes: daytimesReducer,
		saturday: saturdayReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
