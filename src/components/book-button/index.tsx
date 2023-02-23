import React from 'react';
import calendarIcon from '../../assets/book-botton/calendar-clock.svg';
import './styles.scss';

const BookButton = () => (
	<div className='book-button-container' >
		<button type='button'>
			<img src={calendarIcon} alt='calendar' />
      Agende
		</button>
	</div>
);

export default BookButton;

