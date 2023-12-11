import './styles.scss';
import logo from '@assets/intro/logo.png';

const Logo = () => (
  <div className='logo-container'>
    <img loading='lazy' src={logo} alt='logo' />
  </div>
);

export default Logo;
