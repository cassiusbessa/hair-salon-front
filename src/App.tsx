import React from 'react';
import {useState} from 'react';
import {store} from '@store/ReduxStore';
import {Provider} from 'react-redux';
import Intro from '@screens/intro';
import BookButton from '@components/book-button';
import KnowMe from '@screens/know-me';
import Speciality from '@screens/specialty';

function App() {
	return (
		<Provider store={store} >
			<Intro />
			<BookButton />
			<KnowMe />
			<Speciality />
		</Provider>
	);
}

export default App;
