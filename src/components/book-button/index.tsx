import calendarIcon from '../../assets/book-botton/calendar-clock.svg';
import './styles.scss';

const BookButton = () => (
  <div className='book-button-container' >
    <a href='https://contate.me/sula-top' target='_blank' rel='noopener noreferrer'>
      <button type='button'>
        <img loading='lazy' src={calendarIcon} alt='calendar' />
        Agende
      </button>
    </a>
  </div>
);

export default BookButton;

