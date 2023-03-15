import {type CarouselState, carouselSliceFactory} from '../helpers/carousel-slice-factory';

const initialState: CarouselState = {
	currentItem: 0,
	maxItems: 0,
	isFrozen: false,
};

export const testimonialsSlice = carouselSliceFactory('testimonials', initialState);

// Action creators are generated for each case reducer function
export const {incrementCurrentItem, decrementCurrentItem, setMaxItems, setIsFrozen, setCurrentItem} = testimonialsSlice.actions;

export default testimonialsSlice.reducer;
