import { createSlice } from '@reduxjs/toolkit';

export const newsModeSlice = createSlice({
	name: 'newsMode',
	initialState: { isList: true },
	reducers: {
		changeMode(state) {
			state.isList = !state.isList;
		},
	},
});
