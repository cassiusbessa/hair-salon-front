import video from '@assets/speciality/video2.mp4';
import './styles.scss';

const VideoSpeciality = () => {
  return (
    <div className='img-speciality box-shadow' >
      <video autoPlay muted loop id='myVideo' src={video} />
    </div>
  );
};

export default VideoSpeciality;
