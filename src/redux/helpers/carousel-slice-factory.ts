import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export type CarouselState = {
	currentItem: number;
	maxItems: number;
	isFrozen: boolean;
};

export const carouselSliceFactory = (name: string, initialState: CarouselState) => createSlice({
	name,
	initialState,
	reducers: {
		incrementCurrentItems(state) {
			if ((state.currentItem + 1) >= state.maxItems) {
				state.currentItem = 0;
				return;
			}

			state.currentItem += 1;
		},
		decrementCurrentItems(state) {
			if ((state.currentItem - 1) < 0) {
				state.currentItem = state.maxItems - 1;
				return;
			}

			state.currentItem -= 1;
		},
		setMaxItems(state, action: PayloadAction<number>) {
			state.maxItems = action.payload;
		},
		setIsFrozen(state, action: PayloadAction<boolean>) {
			state.isFrozen = action.payload;
		},
		setCurrentItem(state, action: PayloadAction<number>) {
			state.currentItem = action.payload;
		},
	},
});
