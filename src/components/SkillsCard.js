import React from 'react';

const SkillsCard = ({ title, img }) => {
  return (
    <div
      data-aos='fade-up'
      data-aos-offset='0'
      className='w-40 text-black bg-white rounded-lg m-2 p-5 hover:scale-95 transform duration-500 sm:w-60 sm:m-4'
    >
      <img loading='lazy' className='rounded-lg' src={img} alt='html' />
      <div className='py-3 px-3'>
        <h1
          data-aos='slide-left'
          data-aos-offset='50'
          className='text-xl sm:text-3xl font-bold'
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default SkillsCard;
