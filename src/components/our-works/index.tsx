import Carousel from '@components/carousel';
import './styles.scss';
import CarouselImageItem from '@components/carousel-image-item';
import { useSelector } from 'react-redux';
import { incrementCurrentItem, decrementCurrentItem, setMaxItems, setIsFrozen, setCurrentItem } from '@states/our-works-reducer';
import { type RootState } from '@store/redux-store';
import CarouselDots from '@components/carousel-dots';
import carousel1 from '@assets/our-works/loiro-reluzente.jpg';
import carousel2 from '@assets/our-works/restauracao-escova.jpg';
import carousel3 from '@assets/our-works/cabelo-ruivo.jpg';
import carousel4 from '@assets/our-works/pintura-capilar.jpeg';
import carousel5 from '@assets/our-works/cabelo-colorido.jpg';

const items = [
  { content: carousel1, alt: 'Escova em Cabelo Loiro Reluzente/Brilhante' },
  { content: carousel2, alt: 'Antes e Depois de Restruturação, Hidratação e Tratamento em cabelo danificado por Química' },
  { content: carousel3, alt: 'Pintura de cabelo Ruivo/Vermelho' },
  { content: carousel4, alt: 'Pintura capilar em vemelho forte' },
  { content: carousel5, alt: 'Cabelo Colorido de diversas cores' },
];

const OurWorks = () => {
  const ourWorksStates = useSelector((state: RootState) => state.ourWorks);
  const ourWorksActions = {
    incrementCurrentItem,
    decrementCurrentItem,
    setMaxItems,
    setIsFrozen,
    setCurrentItem,
  };

  return (
    <div className='our-works-carousel box-shadow' id='our-works'>
      <Carousel
        Element={CarouselImageItem}
        states={ourWorksStates}
        actions={ourWorksActions}
        items={items}
        style={{ height: '80%' }}
      />
      <div className='carousel-images-footer'>
        <h2>Nossos trabalhos</h2>
        <CarouselDots actions={ourWorksActions} states={ourWorksStates} />
      </div>
    </div>
  );
};

export default OurWorks;
