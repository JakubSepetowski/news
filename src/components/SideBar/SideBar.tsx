import { useSelector } from 'react-redux/es/exports';
import { RootState } from '../../store/store';
import { SideBarCountries } from './SideBarCountries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
export const SideBar = () => {
	const isDark = useSelector((state: RootState) => state.theme.isDark);
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebarHandler = () => {
		setIsOpen((prev) => !prev);
	};

	let icon = faArrowRight;
	if (isOpen) icon = faArrowLeft;

	return (
		<div
			className={`fixed top-0 bottom-0 left-0  w-72 p-4  shadow-md z-10  transition-transform duration-300 text-sm sm:text-base md:w-80   ${
				isOpen ? 'translate-x-0' : 'translate-x-[-100%]'
			} ${isDark ? 'bg-zinc-800 text-dark-mode-text' : 'bg-gray-100 text-light-mode-text'}`}>
			<button
				onClick={toggleSidebarHandler}
				className={`absolute top-20 right-[-2rem] md:top-32 md:right-[-2.5rem] text-dark-mode-text w-8 h-8  md:w-10 md:h-10 flex justify-center items-center rounded-tr-lg rounded-br-md ${
					isDark ? 'bg-dark-primary' : 'bg-light-primary'
				}`}>
				<FontAwesomeIcon icon={icon} />
			</button>
			<div className=' flex flex-col w-full h-full justify-start items-center mt-24 overflow-y-auto scroll '>
				<SideBarCountries/>
			</div>
		</div>
	);
};
