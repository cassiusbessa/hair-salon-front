import './styles.scss';

type Props = {
	isOpen: boolean;
};

const ServiceContent = ({isOpen}: Props) => {
	return (
		<div className={`dropdown-service ${isOpen ? 'open-dropdown-service' : ''}`}>
			<p>
				Cortes<br/><br/>
				Cortes modernos, exclusivos e de qualidade.<br/><br/>
				A partir de R$ 100,00
			</p>
		</div>
	);
};

export default ServiceContent;
