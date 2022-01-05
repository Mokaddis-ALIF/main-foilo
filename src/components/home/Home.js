import React, { useContext } from 'react';
import './Home.css';
import Header from '../header/Header';
import Body from '../body/Body';
import Footer from '../footer/Footer';
import Toggle from '../toogle/Toggle';
import { ThemeContext } from '../../Context';

const Home = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	return (
		<div
			className="home"
			style={{
				backgroundColor: darkMode ? '#222' : 'white',
				color: darkMode && 'white',
			}}
		>
			<Toggle />
			<Header />
			<Body />
			<Footer />
		</div>
	);
};

export default Home;
