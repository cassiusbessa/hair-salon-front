import {store} from '@store/redux-store';
import {Provider} from 'react-redux';
import Intro from '@screens/intro';
import BookButton from '@components/book-button';
import KnowMe from '@screens/know-me';
import Header from '@components/header';
import DropdownService from '@components/dropdown-service';
import Footer from '@components/footer';
import GridWrapper from '@components/grid-wrapper';
import InfoCard from '@components/info-card';
import {content, title} from '@assets/speciality/text';
import ImgSpeciality from '@components/img-speciality';
import OurWorks from '@components/our-works';
import Testimonials from '@components/testimonials';
import OurProducts from '@components/our-products';

function App() {
	return (
		<Provider store={store} >
			<Header />
			<BookButton />
			<Intro />
			<GridWrapper>
				<KnowMe />
				<InfoCard title={title} content={content} id='specialty'/>
				<ImgSpeciality />
				<OurWorks />
				<Testimonials />
				<OurProducts />
			</GridWrapper>
			<DropdownService />
			<Footer />
		</Provider>
	);
}

export default App;
