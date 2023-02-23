import React from 'react';
import {useState} from 'react';
import {store} from '@store/ReduxStore';
import {Provider} from 'react-redux';
import Intro from '@screens/intro';
import Layout from '@components/layout';

function App() {
	const [count, setCount] = useState(0);

	return (
		<Provider store={store} >
			<Layout>
				<Intro />
			</Layout>
		</Provider>
	);
}

export default App;
