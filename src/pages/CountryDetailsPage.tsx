import { NewsSection } from '../components/NewsSection/NewsSection';
import { Params, useLoaderData, useParams } from 'react-router-dom';
import { News } from '../types/types';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { newsCounterSlice } from '../store/newsCounter-slice';
import { Country } from '../types/types';
import { useSelector } from 'react-redux';
import { NewsPopup } from '../components/UI/NewsPopup';
import { RootState } from '../store/store';
import { Modal } from '../components/UI/Modal';
import { LoaderFunction } from 'react-router-dom';

export const getSelectedCountryNews: LoaderFunction = async ({params}) => {
	const countryName = params.countryId;

	const countriesRes = await fetch('/countries.json');
	const countiresData = (await countriesRes.json()) as Country[];

	const filteredCountry = countiresData.filter(
		(country) => country.name.toLocaleLowerCase() === countryName
	);

	const news = await fetch(
		`https://newsapi.org/v2/top-headlines?country=${filteredCountry[0].id}&pageSize=100&apiKey=5a4a7871bcb8480fa06b6fd048962676
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

export const CountryDetalisPage = () => {
	const { articles, totalResults } = useLoaderData() as News;
	const isPopupOpen = useSelector((state: RootState) => state.newsPopup.isOpen);
	const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
	const countryName = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(newsCounterSlice.actions.update(totalResults));
	}, [totalResults]);

	return (
		<main className='w-full mt-10 max-w-7xl  mx-auto'>
			<NewsSection articles={articles} country={countryName.countryId} />
			{isPopupOpen && <NewsPopup />}
			{isModalOpen && <Modal />}
		</main>
	);
};
