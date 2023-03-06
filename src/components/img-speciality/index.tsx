import specialityImg from '@assets/speciality/speciality-img.png';
import './styles.scss';

const ImgSpeciality = () => {
	return (
		<div className='img-speciality'>
			<img src={specialityImg} alt='speciality' width='100%' height='100%' />
		</div>
	);
};

export default ImgSpeciality;
