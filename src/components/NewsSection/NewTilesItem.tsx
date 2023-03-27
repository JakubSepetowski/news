import defaultIcon from '../../assets/icons/newspaper-light.svg';
import defaultIconDark from '../../assets/icons/newspaper-dark.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { newsPopupSlice } from '../../store/newsPopup-slcie';

interface Props {
	source: string;
	title: string;
	content:string|null,
	author:string,
	publishedAt: string;
	url: string;
	urlToImage: string | null;
	description: string | null;
}

export const NewTilesItem = (props: Props) => {
	const dispatch= useDispatch()
	const isDark = useSelector((state: RootState) => state.theme.isDark);

	const index = props.publishedAt.indexOf('T');
	const date = props.publishedAt.slice(0, index);

	let defaultSrc = defaultIcon;
	if (isDark) defaultSrc = defaultIconDark;
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
		<div
		onClick={openDetailsHandler}
			className={`flex flex-col cursor-pointer justify-between min-h-[17rem]  items-center w-60 lg:w-72 p-4 shadow-md rounded-md transition-transform hover:scale-[1.02]  ${
				isDark ? 'bg-dark-el text-dark-mode-text' : 'bg-dark-mode-text text-light-mode-text'
			}`}>
			{props.urlToImage && (
				<img
					className='w-20 h-20 object-cover rounded-full'
					src={props.urlToImage}
					alt={`${props.source} news pictrue`}
				/>
			)}
			{!props.urlToImage && <img className='w-20' src={defaultSrc} alt='newspaper icon' />}

			<h2 className='font-semibold text-center'>{props.title}</h2>
			<div className='text-center w-full'>
				{props.description && <p className='text-sm mt-2'>{props.description}</p>}
				<div className='flex
				 items-center justify-between text-sm mt-4'>
					<p>{date}</p>
					<p>{props.source}</p>
				</div>
			</div>
		</div>
	);
};
