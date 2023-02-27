import React from 'react';
import './styles.scss';
import InfoCard from '@components/info-card';
import {description, title} from '@assets/speciality/text';
import specialityImg from '@assets/speciality/speciality-img.png';

const Speciality = () => (
	<div className='speciality-container'>
		<InfoCard title={title} description={description}/>
		<img src={specialityImg} alt='speciality' />
	</div>
);

export default Speciality;
