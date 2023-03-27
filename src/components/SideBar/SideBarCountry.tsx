import { useSelector } from 'react-redux/es/exports';
import { RootState } from '../../store/store';
import { Country } from '../../types/types';
import { Link } from 'react-router-dom';

export const SideBarCountry = (props: Country) => {
	const isDark = useSelector((state: RootState) => state.theme.isDark);
	return (
		<div
			className={`flex w-full justify-between items-center mb-5 mt-2 p-2 rounded-md shadow-md  ${
				isDark ? 'bg-dark-el text-dark-mode-text' : 'bg-dark-mode-text text-light-mode-text'
			} `}>
			<img className='w-14 h-10 object-cover' src={props.flag} alt={props.name} />
			<p className='font-semibold'>{props.name}</p>
			<Link
				to={`/country/${props.name.toLocaleLowerCase()}`}
				className={`${isDark ? 'text-dark-primary' : 'text-light-primary'}`}>
				See more{' '}
			</Link>
		</div>
	);
};
