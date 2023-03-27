import AvaliableServices, {type DropdownServiceRequirements} from '@components/available-services';
import './stylex.scss';
import {useWindowWidthResize} from '@custom-hooks/use-window-width';

const serviceInfo: DropdownServiceRequirements[] = [
	{
		id: '1',
		content: 'Cortes modernos, exclusivos e de qualidade',
		price: '100,00',
		subTitle: 'Cortes',
		title: 'Cortes',
	},
	{
		id: '2',
		content: 'Colorações modernas, exclusivas e de qualidade',
		price: '100,00',
		subTitle: 'Coloração',
		title: 'Coloração',
	},
	{
		id: '3',
		content: 'Hidratações modernas, exclusivas e de qualidade',
		price: '100,00',
		subTitle: 'Hidratação',
		title: 'Hidratação',
	},
	{
		id: '4',
		content: 'Lavagens modernas, exclusivas e de qualidade',
		price: '100,00',
		subTitle: 'Lavagem',
		title: 'Lavagem',
	},
];

const ServicesAndPrices = () => {
	const currentWindowWidth = useWindowWidthResize();

	return (
		<section className={`services-and-prices ${currentWindowWidth <= 950 ? '' : 'box-shadow'}`}>
			<AvaliableServices requirements={serviceInfo} />
		</section>
	);
};

export default ServicesAndPrices;
