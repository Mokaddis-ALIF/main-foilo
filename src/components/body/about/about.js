import React from 'react';
import './about.css';
import img from '../../../png/Source code-bro.png';
import SocialContact from '../../commons/social-contact/SocialContact';
import { UilDownloadAlt } from '@iconscout/react-unicons';

const About = () => {
	return (
		<div className="about">
			<div className="about-top">
				<div className="about-info">
					Hi, I'm&nbsp;
					<span className="info-name">ALIF.</span>
					<br />
					Front-End Web Developer
				</div>
				<div className="about-photo">
					<img src={img} alt="" className="picture" />
				</div>
			</div>
			<div className="contact-resume">
				<SocialContact />
				<div className="download">
					<a
						download
						href="https://drive.google.com/file/d/1onKnF96cdEf2oLInVDnLRXLEskIGw8YV/view?usp=sharing"
					>
						<UilDownloadAlt />
						Download Resume
					</a>
				</div>
			</div>
		</div>
	);
};

export default About;
