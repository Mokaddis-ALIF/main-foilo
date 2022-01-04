import React, { useState } from 'react';
import './Header.css';
import Mob from './Mob/Mob';
import Web from './web/Web';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="header">
			<div className="menu">
				<div className="web-menu">
					<Web />
				</div>
				<div className="mobile-menu">
					<div onClick={() => setIsOpen(!isOpen)}>
						<i className="fi fi-rr-align-center menu-icon"></i>
					</div>
					{isOpen && <Mob isOpen={isOpen} setIsOpen={setIsOpen} />}
				</div>
			</div>
		</div>
	);
};

export default Header;
