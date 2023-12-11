import sulaPhoto from '@assets/know-me/sula-photo.png';
import './styles.scss';

const KnowMe = () => (
  <section className='know-me-container scroll ' id='know-me'>
    <h2>Conheça-me</h2>
    <div className='know-me-content'>
      <div className='know-me-img-wraper'>
        <img loading='lazy' src={sulaPhoto} alt='Sula' />
      </div>
      <p className='g-txt-just-inter-word'>Sula é uma especialista altamente qualificada e experiente na indústria de beleza, com um foco especial na arte de alisamento capilar. Com uma vasta experiência em trabalhar com todos os tipos de cabelo e técnicas inovadoras, ela é capaz de proporcionar um alisamento perfeitamente liso e impecável. Sua paixão pelo que faz é refletida em cada alisamento, proporcionando um brilho intenso e um toque de suavidade. Confie em Sula e sua equipe para alcançar resultados surpreendentes. Agende sua consulta hoje mesmo e experimente a mágica do alisamento capilar.</p>
    </div>
  </section>
);

export default KnowMe;
