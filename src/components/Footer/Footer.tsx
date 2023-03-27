import { useSelector } from 'react-redux/es/exports';
import { RootState } from '../../store/store';
import { Clock } from './Clock';

export const Footer = () => {
	const isDark = useSelector((state: RootState) => state.theme.isDark);
	const amount = useSelector((state: RootState) => state.counter.amount);
	return (
		<footer
			className={` w-full p-4 pb-8 pt-8  shadow-md text-white ${
				isDark ? 'bg-dark-primary' : 'bg-light-primary'
			} `}>
			<div className='w-full flex justify-between items-center mx-auto max-w-7xl '>
				<Clock />
				<p className='font-semibold'>
					number of articles: <span>{amount}</span>
				</p>
			</div>
		</footer>
	);
};
