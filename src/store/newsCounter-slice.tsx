import { createSlice } from '@reduxjs/toolkit';

export const newsCounterSlice = createSlice({
	name: 'newsCounter',
	initialState: { amount: 0 },
	reducers: {
		update(state,action) {
			state.amount = action.payload
		},
	},
});
