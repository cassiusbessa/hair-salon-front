import AvaliableServices, {type DropdownServiceRequirements} from '@components/available-services';
import './stylex.scss';
import {useWindowWidthResize} from '@custom-hooks/use-window-width';

const serviceInfo: DropdownServiceRequirements[] = [
	{
		id: '0',
		content: 'Tenha um cabelo liso e brilhante com nossos alisamentos exclusivos e de alta qualidade.',
		price: '100,00',
		subTitle: 'Alisamento',
		title: 'Alisamento',
	},
	{
		id: '1',
		content: 'Experimente nossos cortes modernos e exclusivos, personalizados para realçar sua beleza natural.',
		price: '100,00',
		subTitle: 'Cortes',
		title: 'Cortes',
	},
	{
		id: '2',
		content: 'Renove seu visual com nossas colorações modernas e de qualidade, que trazem vida aos seus cabelos.',
		price: '100,00',
		subTitle: 'Coloração',
		title: 'Coloração',
	},
	{
		id: '3',
		content: 'Deixe seus cabelos hidratados e saudáveis com nossas hidratações exclusivas e de alta qualidade.',
		price: '100,00',
		subTitle: 'Hidratação',
		title: 'Hidratação',
	},
	{
		id: '4',
		content: 'Sinta a diferença em seus cabelos com nossas lavagens modernas e de qualidade, que limpam e cuidam dos seus fios.',
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
