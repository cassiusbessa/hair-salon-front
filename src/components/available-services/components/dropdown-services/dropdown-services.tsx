import {useState} from 'react';
import './styles.scss';
import ServiceTitle from '../service-title/service-title';
import ServiceContent from '../service-content/service-content';

export type DropdownServiceRequirements = {
	id: string;
	title: string;
	subTitle: string;
	content: string;
	price: string;
};

type Props = {
	requirements: DropdownServiceRequirements;
};

const DropdownService = ({requirements}: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	const handlerClickHamburguer = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div className='service-mobile'>
				<ServiceTitle onClick={handlerClickHamburguer} isOpen={isOpen} requirements={requirements} />
				<ServiceContent isOpen={isOpen} requirements={requirements} />
			</div>
		</>
	);
};

export default DropdownService;
