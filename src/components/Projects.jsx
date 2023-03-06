import React, { useEffect, useState } from 'react';
import { PROJECTS } from '../assets/data';

const Projects = ({ projects, setProjects }) => {
  useEffect(() => {
    setProjects(PROJECTS);
  }, []);
  console.log(projects);

  return (
    <div className='projects-container'>
      <h1>Your projects</h1>
      <div className='all-projects-container'>
        {projects.map((project) => {
          return (
            <div className='project'>
              <p>{project.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
