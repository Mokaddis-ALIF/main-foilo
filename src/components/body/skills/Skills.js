import React from 'react';
import Separator from '../../commons/seperator/seperator';
import { SkillsData } from '../../data/skillsData';
import SkillCard from './SkillCard';
import './Skills.css';

const Skills = () => {
	const data = SkillsData;
	return (
		<div className="skills">
			<Separator />
			<label className="section-title">Skills</label>
			<div className="skills-container">
				{data.map((item, i) => (
					<div key={i} className="skills-section">
						<label className="skills-section-title">{item.type}</label>
						<div className="skill-list">
							{item.list.map((skill, i) => (
								<SkillCard key={i} skill={skill} />
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
