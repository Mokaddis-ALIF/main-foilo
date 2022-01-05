import React, { useContext } from 'react';
import { ThemeContext } from '../../../Context';
import './Web.css';

const Web = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	return (
		<div className="web">
			<div className="web-options">
				<a
					href="#projects"
					style={{
						color: darkMode && 'white',
					}}
				>
					<i className="fi fi-rr-archive option-icon"></i>Projects
				</a>
			</div>
			<div className="web-options">
				<a
					href="#skills"
					style={{
						color: darkMode && 'white',
					}}
				>
					<i className="fi fi-rr-laptop option-icon"></i>Skills
				</a>
			</div>
			<div className="web-options">
				<a
					href="#work"
					style={{
						color: darkMode && 'white',
					}}
				>
					<i className="fi fi-rr-briefcase option-icon"></i>Work
				</a>
			</div>
			<div className="web-options">
				<a
					href="#contact"
					style={{
						color: darkMode && 'white',
					}}
				>
					<i className="fi fi-rr-mode-portrait option-icon"></i>Contact
				</a>
			</div>
			<div className="web-options">
				<a
					href="https://drive.google.com/file/d/1onKnF96cdEf2oLInVDnLRXLEskIGw8YV/view?usp=sharing"
					style={{
						color: darkMode && 'white',
					}}
				>
					<i className="fi fi-rr-briefcase option-icon"></i>Resume
				</a>
			</div>
		</div>
	);
};

export default Web;
