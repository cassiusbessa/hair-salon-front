import './styles.scss';

const GoogleMaps = () => {
	return (
		<div className='footer-google-maps'>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14693.495986259963!2d-43.1857553!3d-22.973270799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd523d20f9c53%3A0x693c6132635e6b0d!2sCopacabana%2C%20Rio%20de%20Janeiro%20-%20State%20of%20Rio%20de%20Janeiro!5e0!3m2!1sen!2sbr!4v1679950280875!5m2!1sen!2sbr'
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
