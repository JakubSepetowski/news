import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
	name: 'modal',
	initialState: { isOpen: false },
	reducers: {
		toggleModal(state) {
			state.isOpen = !state.isOpen;
			if (document.body.classList.contains('no-scroll')) {
				document.body.classList.add('add-scroll');
				document.body.classList.remove('no-scroll');
			} else {
				document.body.classList.add('no-scroll');
				document.body.classList.remove('add-scroll');
			}
		},
	},
});
