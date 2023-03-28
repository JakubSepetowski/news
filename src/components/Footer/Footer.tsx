import { useSelector } from 'react-redux/es/exports';
import { RootState } from '../../store/store';
import { Clock } from './Clock';

export const Footer = () => {
	const isDark = useSelector((state: RootState) => state.theme.isDark);
	const amount = useSelector((state: RootState) => state.counter.amount);
	return (
		<footer
			className={` w-full p-4 pb-6 pt-6  shadow-md text-white mt-4 ${
				isDark ? 'bg-dark-primary' : 'bg-light-primary'
			} `}>
			<div className='w-full flex flex-col sm:flex-row justify-between items-center mx-auto max-w-7xl font-semibold text-center '>
				<Clock />

				<a className='order-2 sm:order-none' href='https://storyset.com/web' target={'_blank'}>
					Web illustrations by Storyset
				</a>
				<p className='order-1 sm:order-none'>
					number of articles: <span>{amount}</span>
				</p>
			</div>
		</footer>
	);
};
