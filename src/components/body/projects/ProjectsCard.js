import React from 'react';
import './ProjectsCard.css';

const ProjectsCard = ({ project }) => {
	return (
		<>
			<div className="Projects-Card">
				<div className="project-Info">
					<label className="project-title">{project.title}</label>
					<div className="project-links">
						{project.demo && (
							<a href={project.demo} className="project-link">
								<div className="link-button">
									<i className="fi fi-rr-globe"></i> Demo
								</div>
							</a>
						)}
						{project.github && (
							<a href={project.github} className="project-link">
								<div className="link-button">
									<i className="devicon-github-original colored"></i>
									Github
								</div>
							</a>
						)}
					</div>
					<p>{project.about}</p>
					<div className="project-tags">
						{project.tags.map((tag, i) => (
							<label key={i} className="tag">
								{tag}
							</label>
						))}
					</div>
				</div>
				<img src={project.image} alt="" className="project-photo" />
			</div>
		</>
	);
};

export default ProjectsCard;
