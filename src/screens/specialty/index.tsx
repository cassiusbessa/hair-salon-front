import React from 'react';
import './styles.scss';
import InfoCard from '@components/info-card';
import {description, title} from '@assets/speciality/text';

const Speciality = () => (
	<InfoCard title={title} description={description}/>
);

export default Speciality;
