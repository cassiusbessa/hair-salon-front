import React from 'react';
import {useState} from 'react';
import {store} from './Redux/Store/ReduxStore';
import {Provider} from 'react-redux';

function App() {
	const [count, setCount] = useState(0);

	return (
		<Provider store={store} >
		</Provider>
	);
}

export default App;
