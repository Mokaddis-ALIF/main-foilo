import React from 'react';
import './about.css';
import img from '../../../png/Source code-bro.png';
import { UilDownloadAlt } from '@iconscout/react-unicons';

const About = () => {
	return (
		<div className="about">
			<div className="about-top">
				{/* <div className="about-info">
					Hi, I'm&nbsp;<span className="my-name">ALIF</span>
					<br />
					<div className="i-title">
						<div className="title-wrapper">
							<div className="title-item">JavaScript Developer</div>
							<div className="title-item">React JS Developer</div>
							<div className="title-item">Front-End Web Developer</div>
						</div>
					</div>
					<p className="i-desc">
						I design and develop services for customers of all
						sizes,specializing in creating stylish,unique & all kinds of modern
						website
					</p>
					<div className="download">
						<a
							download
							href="https://drive.google.com/file/d/1onKnF96cdEf2oLInVDnLRXLEskIGw8YV/view?usp=sharing"
						>
							<UilDownloadAlt />
							Download Resume
						</a>
					</div>
				</div> */}
				<div className="i-left">
					<div className="i-left-wrapper">
						<h2 className="i-intro">Hello, My name is</h2>
						<h1 className="i-name">ALIF</h1>
						<div className="i-title">
							<div className="i-title-wrapper">
								<div className="i-title-item">Front-end Web Developer</div>
								<div className="i-title-item">JavaScript Developer</div>
								<div className="i-title-item">MERN Stack Developer</div>
								<div className="i-title-item">Computer Science Engineer</div>
								<div className="i-title-item">Traveller</div>
							</div>
						</div>
					</div>
				</div>

				<div className="about-photo">
					<img src={img} alt="" className="picture" />
				</div>
			</div>
		</div>
	);
};

export default About;
