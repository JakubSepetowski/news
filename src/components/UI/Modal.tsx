import { useDispatch } from 'react-redux';
import { modalSlice } from '../../store/modal-slice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useState } from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const bestContent =
	'The best part of the task will be getting positive feedback, and if not, the whole task was enjoyable anyway, because I like coding.';
const difficulContent = `As for the most difficult part, I didn't feel that any particular part was more difficult than others, rather I didn't have much trouble with the tasks set before me. The only thing that bothered me was the api, as I could not fully complete the commands. The field with the description and photo is usually empty, making the project less "useful".`;
export const Modal = () => {
	const dispatch = useDispatch();
	const [conten, setContent] = useState(bestContent);
	const [isBestActive, setIsBestActive] = useState(true);

	const isDark = useSelector((state: RootState) => state.theme.isDark);
	const closeModalHandler = () => {
		dispatch(modalSlice.actions.toggleModal());
	};
	const showBestPartHandler = () => {
		setContent(bestContent);
		setIsBestActive(true);
	};
	const showDifficultPartHanlder = () => {
		setContent(difficulContent);
		setIsBestActive(false);
	};

	return (
		<div className='fixed z-50 top-0 left-0 h-full w-full bg-black bg-opacity-75 flex justify-center items-center'>
			<div
				className={` p-4  rounded-md shadow-md w-3/4 max-w-lg flex flex-col  ${
					isDark ? 'bg-dark-el text-dark-mode-text' : 'bg-dark-mode-text text-light-mode-text'
				}`}>
				<button onClick={closeModalHandler} className='self-end'>
					<FontAwesomeIcon className='p-1 text-xl' icon={faClose} />
				</button>
				<div
					className={`flex flex-col items-start sm:flex-row border-b w-full pb-2 font-semibold  md:text-lg ${
						isDark ? 'text-dark-primary' : 'text-light-primary'
					}`}>
					<button onClick={showBestPartHandler} className={`${isBestActive ? 'underline' : ''}`}>
						The best part
					</button>
					<button
						onClick={showDifficultPartHanlder}
						className={`mt-1 sm:mt-0 sm:ml-4 ${!isBestActive ? 'underline' : ''}`}>
						The most difficult part
					</button>
				</div>

				<p className='mt-4 md:mt-6'>{conten}</p>
			</div>
		</div>
	);
};
