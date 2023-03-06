import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PROJECTS } from '../assets/data';

const Projects = ({ projects, setProjects }) => {
  useEffect(() => {
    setProjects(PROJECTS);
  }, []);

  const handleDelete = (id) => {
   const filteredProjects = projects.filter((project) => project.id != id)
   return setProjects(filteredProjects);
  }

  return (
    <div className='projects-container'>
      <h1>Your projects</h1>
      <div className='all-projects-container'>
        {projects.map((project) => {
          return (
            <NavLink
              className='project'
              key={project.id}
              to={`/project/${project.id}`}
            >
              <section>
                <h2>{project.title}</h2>
                <details>
                  <summary>Description</summary>
                  <p>{project.description}</p>
                </details>
              </section>
              <div className='project-icons'>
                <i class='fa-solid fa-pen-to-square'></i>
                <i
                  class='fa-solid fa-trash'
                  onClick={() => handleDelete(project.id)}
                ></i>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
