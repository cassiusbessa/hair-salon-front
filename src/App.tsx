import React from 'react';
import {useState} from 'react';
import {store} from '@store/ReduxStore';
import {Provider} from 'react-redux';
import Intro from '@screens/intro';

function App() {
	const [count, setCount] = useState(0);

	return (
		<Provider store={store} >
			<Intro />
		</Provider>
	);
}

export default App;
