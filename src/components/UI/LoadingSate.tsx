import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
export const LoadingState = () => {
	const isDark = useSelector((state: RootState) => state.theme.isDark);
	return (
		<div className='h-4 md:w-28 scale-50 md:scale-100 flex relative'>
			<span className={`circle h-4 w-4  ${isDark ? 'bg-dark-primary' : 'bg-light-primary'}`}></span>
			<span className={`circle h-4 w-4  ${isDark ? 'bg-dark-primary' : 'bg-light-primary'}`}></span>
			<span className={`circle h-4 w-4  ${isDark ? 'bg-dark-primary' : 'bg-light-primary'}`}></span>
			<span className={`circle h-4 w-4  ${isDark ? 'bg-dark-primary' : 'bg-light-primary'}`}></span>
		</div>
	);
};
