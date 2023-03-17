import './styles.scss';

const GoogleMaps = () => {
	return (
		<div className='footer-google-maps'>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.1713911416828!2d-43.1935613852315!3d-22.980724184974225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd53efc8c14fb%3A0xe0a384d832510d1a!2sR.%20S%C3%A1%20Ferreira%2C%2044%20-%20Copacabana%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022071-100!5e0!3m2!1spt-BR!2sbr!4v1679011266134!5m2!1spt-BR!2sbr'
				width='100%'
				height='300'
				style={{border: 0}}
				allowFullScreen={false}
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
			></iframe>
		</div>
	);
};

export default GoogleMaps;
