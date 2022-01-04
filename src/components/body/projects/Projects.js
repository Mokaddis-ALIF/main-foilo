import React from 'react';
import Separator from '../../commons/seperator/seperator';
import { ProjectsData } from '../../data/projects';
import './Projects.css';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
	const data = ProjectsData;
	return (
		<div className="projects">
			<Separator />
			<label className="section-title">Projects</label>
			<div>
				{data.map((p) => (
					<ProjectsCard key={p.id} project={p} />
				))}
			</div>
		</div>
	);
};

export default Projects;
