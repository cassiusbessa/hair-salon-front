import './styles.scss';

const GoogleMaps = () => {
  return (
    <div className='footer-google-maps'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.639202209589!2d-43.18068842504343!3d-22.96351103990002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd5558a6d543d%3A0x1d5c021128c77c7b!2sR.%20Barata%20Ribeiro%2C%2090%20-%20Copacabana%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022011-002!5e0!3m2!1spt-BR!2sbr!4v1703637079979!5m2!1spt-BR!2sbr" width='100%'
        height='300'
        style={{ border: 0 }}
        allowFullScreen={false}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

export default GoogleMaps;
