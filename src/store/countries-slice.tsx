import { createSlice } from '@reduxjs/toolkit';
import { Country } from '../types/types';

const initCountires: {
	countries: Country[];
} = {
	countries: [],
};

export const countriesSlice = createSlice({
	name: 'countries',
	initialState: initCountires,
	reducers: {
		initArray(state, action) {
			state.countries = action.payload;
		},
	},
});
