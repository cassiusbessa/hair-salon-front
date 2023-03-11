/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import {type CarouselActions, type CarouselStates} from '@components/carousel';
import './styles.scss';
import {useDispatch} from 'react-redux';

type Props = {
	states: CarouselStates;
	actions: CarouselActions;
};

const CarouselDots = ({states, actions}: Props) => {
	const dispatch = useDispatch();

	const generateDots = () => {
		const dots = [];
		for (let i = 0; i < states.maxItems; i++) {
			dots.push(
				<div
					key={i}
					onClick={() => dispatch(actions.setCurrentItem(i))}
					className={i === states.currentItem ? 'current-dot' : ''}
				></div>,
			);
		}

		return dots;
	};

	return (
		<div className='carousel-dots'>
			{generateDots()}
		</div>
	);
};

export default CarouselDots;
