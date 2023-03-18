import video1 from '@assets/speciality/video1.mp4';
import './styles.scss';

const VideoSpeciality = () => {
	return (
		<div className='img-speciality' >
			<video autoPlay muted loop id='myVideo' src={video1} />
		</div>
	);
};

export default VideoSpeciality;
