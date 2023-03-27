import './styles.scss';

type Props = {
	title: string;
	text: string;
	id: string;
};

const InfoCard = ({title, text, id}: Props) => {
	return (
		<section className='info-card-container box-shadow' id={id}>
			<div className='info-card-title' >
				<h2>{title}</h2>
			</div>
			<p className='g-txt-just-inter-word'>{text}</p>
		</section>
	);
};

export default InfoCard;
