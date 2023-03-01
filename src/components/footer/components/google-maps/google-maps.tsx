import './styles.scss';

const GoogleMaps = () => {
	return (
		<div className='footer-google-maps'>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14978.537143880592!2d-40.23734685!3d-20.1909471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1677688527057!5m2!1sen!2sbr'
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
