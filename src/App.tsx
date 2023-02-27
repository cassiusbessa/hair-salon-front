import {store} from '@store/ReduxStore';
import {Provider} from 'react-redux';
import Intro from '@screens/intro';
import BookButton from '@components/book-button';
import KnowMe from '@screens/know-me';
import Header from '@components/header';
import Speciality from '@screens/specialty';

function App() {
	return (
		<Provider store={store} >
			<Header />
			<Intro />
			<BookButton />
			<KnowMe />
			<Speciality />
		</Provider>
	);
}

export default App;
