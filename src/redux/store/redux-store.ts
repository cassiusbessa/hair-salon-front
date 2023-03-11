import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '@states/count';
import carouselImagesReducer from '@states/carousel-images';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		carouselImages: carouselImagesReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
