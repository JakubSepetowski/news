import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { SideBarCountry } from './SideBarCountry';

export const SideBarCountries = () => {
	const countries = useSelector((state: RootState) => state.countries.countries);
	return (
		<>
			{countries.map((country) => (
				<SideBarCountry key={country.id} name={country.name} flag={country.flag} id={country.id} />
			))}
		</>
	);
};
