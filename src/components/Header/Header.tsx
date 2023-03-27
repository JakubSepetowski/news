import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { themeSlice } from '../../store/theme-slice';
import { newsModeSlice } from '../../store/newsMode-slice';
import { RootState } from '../../store/store';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { modalSlice } from '../../store/modal-slice';
import { Button } from './Button';

export const Header = () => {
	const dispatch = useDispatch();
	const isDark = useSelector((state: RootState) => state.theme.isDark);
	const isList = useSelector((state: RootState) => state.newsMode.isList);
	const themeChangeHnalder = () => {
		dispatch(themeSlice.actions.changeTheme());
	};
	const changeModeHandler = () => {
		dispatch(newsModeSlice.actions.changeMode());
	};
	const openModalHandler = () => {
		dispatch(modalSlice.actions.toggleModal());
	};

	let icon = faList;
	if (!isList) icon = faTh;

	return (
		<header
			className={`w-full p-4 sticky top-0 z-50 md:p-6 md:pl-8 md:pr-8 shadow-md  ${
				isDark ? 'bg-dark-el text-dark-mode-text' : 'bg-dark-mode-text text-light-mode-text'
			}`}>
			<div className='w-full max-w-7xl flex items-center justify-between mx-auto md:text-lg'>
				<Link to='/'>
					<h1
						className={`text-xl md:text-3xl font-bold transition-transform duration-200 hover:scale-110 ${
							isDark ? 'text-dark-primary' : 'text-light-primary'
						}`}>
						GnNews
					</h1>
				</Link>

				<div>
					<Button icon={faCircleInfo} onClickHandler={openModalHandler} />
					<Button icon={icon} onClickHandler={changeModeHandler} />
					<Button icon={faMoon} onClickHandler={themeChangeHnalder} />
				</div>
			</div>
		</header>
	);
};
