import {useState} from 'react';
import './styles.scss';
import ServiceTitle from './components/service-title/service-title';
import ServiceContent from './components/service-content/service-content';

const DropdownService = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handlerClickHamburguer = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='service-container'>
			<ServiceTitle onClickArrow={handlerClickHamburguer} isOpen={isOpen} />
			<ServiceContent isOpen={isOpen} />
		</div>
	);
};

export default DropdownService;
