/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import {useEffect, useState} from 'react';
import './styles.scss';
import DropdownService from './components/dropdown-services/dropdown-services';
import ServiceTitle from './components/service-title/service-title';

export type DropdownServiceRequirements = {
	id: string;
	title: string;
	subTitle: string;
	content: string;
	price: string;
};

type Props = {
	requirements: DropdownServiceRequirements[];
};

const AvaliableServices = ({requirements}: Props) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [currentService, setCurrentService] = useState(0);

	useEffect(() => {
		const handlerResize = () => setWindowWidth(window.innerWidth);

		window.addEventListener('resize', handlerResize);

		return (() => window.removeEventListener('resize', handlerResize));
	}, []);

	const generateDesktopServicesComponent = () => (
		<div className='services-desktop'>
			<div className='services-desktop-left'>
				{requirements.map((ele: DropdownServiceRequirements, index) => (
					<ServiceTitle
						key={ele.id}
						requirements={ele}
						onClick={() => setCurrentService(index)}
						className={index === currentService ? 'service-selected' : ''}
					/>
				))}
			</div>
			<div className='services-desktop-right'>
				<p>
					<span>{requirements[currentService].subTitle}</span><br/><br/>
					{requirements[currentService].content}<br/><br/>
					A partir de R$ {requirements[currentService].price}
				</p>
			</div>
		</div>
	);

	return (
		<>
			{
				windowWidth <= 950
					? (
						<div className='container-service-mobile'>
							{requirements.map((ele: DropdownServiceRequirements) => (
								<DropdownService key={ele.id} requirements={ele} />
							))}
						</div>
					) : generateDesktopServicesComponent()
			}
		</>
	);
};

export default AvaliableServices;
