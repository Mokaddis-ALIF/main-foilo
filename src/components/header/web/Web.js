import React from 'react';
import './Web.css';

const Web = () => {
	return (
		<div className="web">
			<div className="web-options">
				<a href="#projects">
					<i className="fi fi-rr-archive option-icon"></i>Projects
				</a>
			</div>
			<div className="web-options">
				<a href="#skills">
					<i className="fi fi-rr-laptop option-icon"></i>Skills
				</a>
			</div>
			<div className="web-options">
				<a href="#work">
					<i className="fi fi-rr-briefcase option-icon"></i>Work
				</a>
			</div>
			<div className="web-options">
				<a href="#contact">
					<i className="fi fi-rr-mode-portrait option-icon"></i>Contact
				</a>
			</div>
		</div>
	);
};

export default Web;
