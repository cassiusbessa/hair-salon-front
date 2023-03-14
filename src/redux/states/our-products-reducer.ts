import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export type OurProductssState = {
	currentItem: number;
	maxItems: number;
	isFrozen: boolean;
};

const initialState: OurProductssState = {
	currentItem: 0,
	maxItems: 0,
	isFrozen: false,
};

export const ourProductsSlice = createSlice({
	name: 'ourProducts',
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

// Action creators are generated for each case reducer function
export const {incrementCurrentItems, decrementCurrentItems, setMaxItems, setIsFrozen, setCurrentItem} = ourProductsSlice.actions;

export default ourProductsSlice.reducer;
