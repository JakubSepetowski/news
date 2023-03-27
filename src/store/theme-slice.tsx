import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
	name: 'theme',
	initialState: { isDark: false },
	reducers: {
		changeTheme(state) {
			state.isDark = !state.isDark;
			if (state.isDark) document.body.className = 'dark';
			else document.body.className = 'light';
		},
	},
});
