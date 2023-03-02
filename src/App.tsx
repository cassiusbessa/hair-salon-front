import {store} from '@store/ReduxStore';
import {Provider} from 'react-redux';
import Intro from '@screens/intro';
import BookButton from '@components/book-button';
import KnowMe from '@screens/know-me';
import Header from '@components/header';
import Speciality from '@screens/specialty';
import DropdownService from '@components/dropdown-service';
import Footer from '@components/footer';

function App() {
	return (
		<Provider store={store} >
			<Header />
			<BookButton />
			<Intro />
			<KnowMe />
			<Speciality />
			<DropdownService />
			<Footer />
		</Provider>
	);
}

export default App;
