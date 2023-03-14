import {type CarouselState, carouselSliceFactory} from '../helpers/carousel-slice-factory';

const initialState: CarouselState = {
	currentItem: 0,
	maxItems: 0,
	isFrozen: false,
};

export const ourProductsSlice = carouselSliceFactory('ourProducts', initialState);

// Action creators are generated for each case reducer function
export const {incrementCurrentItems, decrementCurrentItems, setMaxItems, setIsFrozen, setCurrentItem} = ourProductsSlice.actions;

export default ourProductsSlice.reducer;
