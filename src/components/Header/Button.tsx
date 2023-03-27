import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux/es/exports';
import { RootState } from '../../store/store';

interface Props {
	icon: IconProp;
	onClickHandler: () => void;
}

export const Button = (props: Props) => {
	const isDark = useSelector((state: RootState) => state.theme.isDark);
	return (
		<button
			onClick={props.onClickHandler}
			className={`p-1 pl-2 pr-2 ml-2 md:ml-2 transition-colors duration-200 ${
				isDark ? 'hover:text-dark-primary' : 'hover:text-light-primary'
			}`}>
			<FontAwesomeIcon icon={props.icon} />
		</button>
	);
};
