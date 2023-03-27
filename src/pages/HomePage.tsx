import { NewsSection } from '../components/NewsSection/NewsSection';
import { useLoaderData } from 'react-router-dom';
import { News } from '../types/types';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { newsCounterSlice } from '../store/newsCounter-slice';
import { NewsPopup } from '../components/UI/NewsPopup';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Modal } from '../components/UI/Modal';

export const getNews = async () => {
	const resIP = await fetch(
		`https://api.geoapify.com/v1/ipinfo?&apiKey=db3259b3713749a8839c98ae73c9257a`
	);
	if (!resIP.ok) {
		throw {
			message: 'Could not get information about the country you are currently in, please try again',
			status: 500,
		};
	}
	const dataIP = await resIP.json();

	const country = dataIP.country.iso_code.toLowerCase();
	const news = await fetch(
		`https://newsapi.org/v2/top-headlines?country=${country}&pageSize=100&apiKey=5a4a7871bcb8480fa06b6fd048962676
		`
	);

	if (!news.ok) {
		throw {
			message:
				'Could not fetch news for selected country.This is probably due to reaching the maximum number of requests per day (100 per 24h). Please try again later',
			status: 500,
		};
	}

	return news;
};

export const HomePage = () => {
	const { articles, totalResults } = useLoaderData() as News;
	const dispatch = useDispatch();
	const isPopupOpen = useSelector((state: RootState) => state.newsPopup.isOpen);
	const isModalOpen= useSelector((state:RootState)=>state.modal.isOpen)
	useEffect(() => {
		dispatch(newsCounterSlice.actions.update(totalResults));
	}, []);

	return (
		<main className='w-full mt-10 max-w-7xl  mx-auto'>
			<NewsSection articles={articles} country='' />
			{isPopupOpen && <NewsPopup />}
			{isModalOpen && <Modal/>}
		</main>
	);
};
