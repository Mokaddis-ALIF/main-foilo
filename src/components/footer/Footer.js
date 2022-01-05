import React from 'react';
import Separator from '../commons/seperator/seperator';
import SocialContact from '../commons/social-contact/SocialContact';
import './Footer.css';

const Footer = () => {
	return (
		<>
			<Separator />
			<div className="footer">
				<span className="footer-text">
					Made with 🔥 by Mokaddis Borhan ALIF
				</span>
				<SocialContact />
			</div>
		</>
	);
};

export default Footer;
