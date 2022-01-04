import React from 'react';
import './Home.css';
import Header from '../header/Header';
import Body from '../body/Body';
import Footer from '../footer/Footer';

const Home = () => {
	return (
		<div className="home">
			<Header />
			<Body />
			<Footer />
		</div>
	);
};

export default Home;
