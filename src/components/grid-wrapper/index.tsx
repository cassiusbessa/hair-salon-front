import './styles.scss';

type Props = {
	children: any;
};

const GridWrapper = ({children}: Props) => {
	return (
		<main>
			{children}
		</main>
	);
};

export default GridWrapper;
