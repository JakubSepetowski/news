import errorIon from '../assets/icons/error.svg';
import { Link, useRouteError } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ErrorMsg } from '../types/types';

export const ErrorPage = () => {
	const error = useRouteError() as ErrorMsg;
	if (error.status === 500)
		return (
			<main className='flex flex-col h-screen items-center justify-center p-4'>
				<p className='text-xl md:text-2xl w-full max-w-lg text-center'>{error.message}</p>
				<Link className=' p-4 rounded-md text-2xl text-purple-800 mt-2' to='/'>
					<FontAwesomeIcon className='mr-4 text-black' icon={faArrowRight} />
					BACK HOME
				</Link>
			</main>
		);

	return (
		<main className='flex flex-col h-screen items-center justify-center p-4'>
			<img className='w-full max-w-2xl' src={errorIon} alt='error iamge' />
			<Link className=' p-4 rounded-md text-2xl text-purple-800' to='/'>
				<FontAwesomeIcon className='mr-4 text-black' icon={faArrowRight} />
				BACK HOME
			</Link>
		</main>
	);
};
