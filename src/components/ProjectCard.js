import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, description, img, live, code }) => {
  return (
    <div
      data-aos='fade-up'
      data-aos-offset='0'
      className='w-72 text-white  rounded-lg m-4 border hover:scale-105 transform duration-500'
    >
      <img loading='lazy' className='rounded-lg' src={img} alt='project1' />
      <div className='py-3 px-3'>
        <h1 className='text-xl font-bold'>{title}</h1>
        <p className='text-start'>{description}</p>
        <div className='flex justify-center mx-5 py-2'>
          <Link to={live} target='blank'>
            <button className='bg-blue-700 text-white p-1 px-2 rounded-lg mx-3'>
              Live
            </button>
          </Link>
          <Link to={code} target='blank'>
            <button className='bg-red-700 text-white p-1 px-2 rounded-lg mx-3'>
              Code
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
