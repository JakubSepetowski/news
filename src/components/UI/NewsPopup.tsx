import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { newsPopupSlice } from '../../store/newsPopup-slcie';
export const NewsPopup = () => {
	const dispatch=useDispatch()
	const { author, content, date, title, url } = useSelector(
		(state: RootState) => state.newsPopup.data
	);
	const isDark = useSelector((state: RootState) => state.theme.isDark);

	const closePopupHanlder = () => {
		dispatch(newsPopupSlice.actions.closePopup())
	};

	return (
		<div
			className={`flex flex-col justify-between items-center p-4 fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] shadow-2xl w-3/4 max-w-xl rounded-md ${
				isDark ? 'bg-zinc-800 text-dark-mode-text' : 'bg-gray-100 text-light-mode-text'
			}`}>
			<button onClick={closePopupHanlder} className='self-end'>
				<FontAwesomeIcon
					className={`p-1 text-xl ${isDark ? 'text-dark-primary' : 'text-light-primary'}`}
					icon={faClose}
				/>
			</button>
			<div className='text-center mt-2'>
				<h2 className='font-bold'>{title}</h2>
				{content && <p className='mt-4'>{content}</p>}
				{!content && <p className='mt-4'>interested? Check the article below</p>}

				<a
					href={url}
					target='_blank'
					className={`font-semibold ${isDark ? 'text-dark-primary' : 'text-light-primary'}`}>
					read more...
				</a>
			</div>
			<div className='flex justify-between w-full mt-10 font-semibold'>
				<p>{author}</p>
				<p>{date}</p>
			</div>
		</div>
	);
};
