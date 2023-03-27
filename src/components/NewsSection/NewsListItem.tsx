import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { newsPopupSlice } from '../../store/newsPopup-slcie';


interface Props {
	source: string;
	title: string;
	publishedAt: string;
	url: string;
	content: string|null,
	author:string
}

export const NewsListItem = (props: Props) => {
	const dispatch= useDispatch()
	const isDark = useSelector((state: RootState) => state.theme.isDark);

	const index = props.publishedAt.indexOf('T');
	const date = props.publishedAt.slice(0, index);

	const openDetailsHandler = () => {
		dispatch(newsPopupSlice.actions.getData({
			title:props.title,
			content: props.content,
			url:props.url,
			date,
			author:props.author,

		}))
	}

	return (
		<div onClick={openDetailsHandler}
			className={`flex flex-col cursor-pointer  sm:flex-row items-center justify-between p-3 sm:p-4 sm:pb-6 sm:pt-6 shadow-md w-full rounded-md text-sm transition-transform hover:scale-[1.02] max-w-3xl md:text-base relative  ${
				isDark ? 'bg-dark-el text-dark-mode-text' : 'bg-dark-mode-text text-light-mode-text'
			}`}>
			<div className='sm:w-4/6'>
				<h3 className='text-center font-semibold'>{props.title}</h3>
			</div>
			<div className='flex mt-2 sm:mt-0 sm:flex-col sm:items-end'>
				<p>{date}</p>
				<p className='ml-3 sm:ml-0'>{props.source}</p>
			</div>
			<FontAwesomeIcon
				className={`absolute top-2 left-2  text-xl opacity-20 ${
					isDark ? 'text-dark-primary' : 'text-light-primary'
				}`}
				icon={faQuoteRight}
			/>
		</div>
	);
};
