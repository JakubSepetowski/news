import { createSlice } from '@reduxjs/toolkit';

const initialPopup = {
	isOpen: false,
	data: {
		title: '',
		content: '',
		url: '',
		date: '',
		author: '',
	},
};

export const newsPopupSlice = createSlice({
	name: 'newsPopup',
	initialState: initialPopup,
	reducers: {
		closePopup(state) {
			state.isOpen = false;
		},
		getData(state, action) {
			state.isOpen = true;
			state.data = action.payload;
		},
	},
});
