import React from 'react';
import { SocialData } from '../../data/social';
import './SocialIconPrev.css';

const SocialIconPrev = () => {
	const data = SocialData;

	return (
		<div className="social">
			{data.map((item) => (
				<>
					<a key={item.id} href={item.link} className="social-a">
						<img
							src={item.icon}
							className="social-icon-class"
							id="social-class"
							alt=""
						/>
					</a>
				</>
			))}
		</div>
	);
};

export default SocialIconPrev;
