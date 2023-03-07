import './styles.scss';

const GalleryWrapper = () => {
	return (
		<div className='carousel-gallery-wrapper'>
			<div className='carousel-gallery'>
				<img className='carousel-item carousel-current-item' src='https://source.unsplash.com/random/250x250?beach' alt='Beach Image' />
				<img className='carousel-item' src='https://source.unsplash.com/random/250x250?animal' alt='Animal Image' />
				<img className='carousel-item' src='https://source.unsplash.com/random/250x250?nature' alt='Nature Image' />
				<img className='carousel-item' src='https://source.unsplash.com/random/250x250?night' alt='Night Image' />
				<img className='carousel-item' src='https://source.unsplash.com/random/250x250?street' alt='Street Image' />
			</div>
		</div>
	);
};

export default GalleryWrapper;
