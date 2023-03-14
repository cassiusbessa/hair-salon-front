import {configureStore} from '@reduxjs/toolkit';
import ourWorksReducer from '@states/our-works-reducer';
import testimonialsReducer from '@states/testimonials-reducer';
import ourProductsReducer from '@states/our-products-reducer';

export const store = configureStore({
	reducer: {
		ourWorks: ourWorksReducer,
		testimonials: testimonialsReducer,
		ourProducts: ourProductsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
