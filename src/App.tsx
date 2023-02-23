import React from 'react';
import {useState} from 'react';
import {store} from '@store/ReduxStore';
import {Provider} from 'react-redux';
import Intro from '@screens/intro';
import BookButton from '@components/book-button';

function App() {
	const [count, setCount] = useState(0);

	return (
		<Provider store={store} >
			<Intro />
			<BookButton />
		</Provider>
	);
}

export default App;
