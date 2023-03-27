import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { SideBar } from '../components/SideBar/SideBar';
import { Footer } from '../components/Footer/Footer';


export const RootLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<SideBar />
			<Footer/>
		</>
	);
};
