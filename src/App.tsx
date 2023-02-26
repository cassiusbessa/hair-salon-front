import {useState} from 'react';
import {store} from '@store/ReduxStore';
import {Provider} from 'react-redux';
import Intro from '@screens/intro';
import BookButton from '@components/book-button';
import Header from '@components/header';

function App() {
	const [count, setCount] = useState(0);

	return (
		<Provider store={store} >
			<Header />
			{/* <Intro />
			<BookButton /> */}
		</Provider>
	);
}

export default App;
