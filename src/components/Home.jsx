import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../assets/Shutterstock.webp';

const Home = ({ user, setUser }) => {
  const startBtn = user ? '/projects' : '/login'

  return (
    <div className='home-container'>
     <section className="home-text">

      <h1>PROJECT</h1>
      <p>
        From planning to production, this pma will simplify all the projects into an application where one will be able to view the project or task which he/she will be doing and the team mates who they will cooperate.
      </p>
      <NavLink to={startBtn}>
        <button>Start a project</button>
      </NavLink>
     </section>
     <section className="home-img">
      <img src={img} alt="Programming" />
     </section>
    </div>
  );
};

export default Home;
