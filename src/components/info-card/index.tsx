import './styles.scss';

type Props = {
	title: string;
	content: string[];
	id: string;
};

const InfoCard = ({title, content, id}: Props) => {
	return (
		<section className='info-card-container' id={id}>
			<div className='info-card-title' >
				<h2>{title}</h2>
			</div>
			<p>{content[0]}</p>
		</section>
	);
};

export default InfoCard;
