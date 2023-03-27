import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './pages/RootLayout';
import { HomePage } from './pages/HomePage';
import { CountryDetalisPage, getSelectedCountryNews } from './pages/CountryDetailsPage';
import { useEffect } from 'react';
import { countriesSlice } from './store/countries-slice';
import { useDispatch } from 'react-redux';
import { Country } from './types/types';
import { getNews } from './pages/HomePage';
import { ErrorPage } from './pages/ErrorPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage />, loader: getNews},
			{
				path: 'country/:countryId',
				element: <CountryDetalisPage />,
				loader: getSelectedCountryNews,
			
			},
		],
	},
]);

let isInitial = true;
export const App = () => {
	const dispatch = useDispatch();

	const getCountries = async () => {
		if (!isInitial) return;
		const res = await fetch('/countries.json');
		const data: Country[] = await res.json();
		dispatch(countriesSlice.actions.initArray(data));
	};

	useEffect(() => {
		getCountries();

		return () => {
			isInitial = false;
		};
	}, []);

	return <RouterProvider router={router} />;
};
