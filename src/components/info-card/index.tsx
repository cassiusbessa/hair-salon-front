import React from 'react';
import './styles.scss';

type Iprops = {
	title: string;
	description: string;
};

const InfoCard = ({title, description}: Iprops) => (
	<div className='info-card-container'>
		<div className='info-card-title'>
			<h2>{title}</h2>
		</div>
		<p className='info-card-description'>{description}</p>
	</div>
);

export default InfoCard;
