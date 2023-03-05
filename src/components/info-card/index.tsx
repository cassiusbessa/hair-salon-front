import './styles.scss';

type Props = {
	title: string;
	content: string[];
};

const InfoCard = ({title, content}: Props) => {
	return (
		<section className='info-card-container'>
			<div className='info-card-title' >
				<h2>{title}</h2>
			</div>
			<p>{content[0]}</p>
		</section>
	);
};

export default InfoCard;
