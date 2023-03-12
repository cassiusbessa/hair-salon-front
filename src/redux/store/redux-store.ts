import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '@states/count';
import ourWorksReducer from '@states/our-works-reducer';
import testimonialsReducer from '@states/testimonials-reducer';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		ourWorks: ourWorksReducer,
		testimonials: testimonialsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
