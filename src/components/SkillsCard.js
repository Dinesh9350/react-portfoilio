import React from 'react';
import html from '../assets/html-5.png';

const SkillsCard = ({ title, img }) => {
  return (
    <div className='w-60 text-black bg-white rounded-lg m-4 p-5 hover:scale-95 transform duration-500	'>
      <img className='rounded-lg' src={img} alt='html' />
      <div className='py-3 px-3'>
        <h1 className='text-3xl font-bold'>{title}</h1>
      </div>
    </div>
  );
};

export default SkillsCard;
