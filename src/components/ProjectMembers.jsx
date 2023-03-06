import React from 'react';
import { useParams } from 'react-router-dom';
import { MEMBERS } from '../assets/data'

const ProjectMembers = () => {
  const { id } = useParams();

  // const findProject = id => {

  // }

  return (
    <div className='project-members-container'>
      <h1>Project Members</h1>
      <h2>Project Members</h2>
    </div>
  );
};

export default ProjectMembers;