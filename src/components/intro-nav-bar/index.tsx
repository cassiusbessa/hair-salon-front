import React, {useState} from 'react';
import './styles.scss';

const IntroNavBar = () => (
	<div className='nav-bar-container'>
		<ul>
			<li>Conheça-me</li>
			<li>Especialidade</li>
			<li>Contatos</li>
		</ul>
		<ul>
			<li>Trabalhos</li>
			<li>Endereço</li>
			<li className='booking'>AGENDE AGORA</li>
		</ul>
	</div>
);

export default IntroNavBar;
