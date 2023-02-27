import {useState} from 'react';
import {store} from '@store/ReduxStore';
import {Provider} from 'react-redux';
import Intro from '@screens/intro';
import BookButton from '@components/book-button';
import Header from '@components/header';

function App() {
	return (
		<Provider store={store} >
			<Header />
			<Intro />
			<BookButton />
			<div style={{width: '100px', height: '2000px', backgroundColor: 'green'}}></div>
		</Provider>
	);
}

export default App;
