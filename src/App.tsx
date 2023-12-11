import { store } from '@store/redux-store';
import { Provider } from 'react-redux';
import Intro from '@screens/intro';
import BookButton from '@components/book-button';
import KnowMe from '@screens/know-me';
import Header from '@components/header';
import Footer from '@components/footer';
import GridWrapper from '@components/grid-wrapper';
import InfoCard from '@components/info-card';
import { text, title } from '@assets/speciality/text';
import VideoSpeciality from '@components/video-speciality';
import OurWorks from '@components/our-works';
import Testimonials from '@components/testimonials';
import OurProducts from '@components/our-products';
import ServicesAndPrices from '@screens/services-and-prices';
import KeyWords from '@components/keywords';
import { words } from '@assets/keywords/words';

function App() {
  return (
    <Provider store={store}>
      <KeyWords words={words} />
      <h1>TESTE</h1>
      <Header />
      <BookButton />
      <Intro />
      <GridWrapper>
        <KnowMe />
        <InfoCard title={title} text={text} id='specialty' />
        <VideoSpeciality />
        <OurWorks />
        <Testimonials />
        <OurProducts />
      </GridWrapper>
      <ServicesAndPrices />
      <Footer />
    </Provider>
  );
}

export default App;
