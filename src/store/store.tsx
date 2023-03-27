import { configureStore } from '@reduxjs/toolkit';
import { themeSlice } from './theme-slice';
import { newsModeSlice } from './newsMode-slice';
import { modalSlice } from './modal-slice';
import { countriesSlice } from './countries-slice';
import { newsCounterSlice } from './newsCounter-slice';
import { newsPopupSlice } from './newsPopup-slcie';

export const store = configureStore({
	reducer: {
		theme: themeSlice.reducer,
		newsMode: newsModeSlice.reducer,
		modal: modalSlice.reducer,
		countries: countriesSlice.reducer,
		counter: newsCounterSlice.reducer,
		newsPopup: newsPopupSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
