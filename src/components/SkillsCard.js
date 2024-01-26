import React from 'react';

const SkillsCard = ({ title, img }) => {
  return (
    <div
      data-aos='zoom-in'
      data-aos-duration='1000'
      data-aos-once='true'
      data-aos-delay='300'
      className='w-36 text-black bg-white rounded-lg m-2 p-5 hover:scale-95 transform duration-500 lg:w-60 md: sm:m-4'
    >
      <img loading='lazy' className='rounded-lg' src={img} alt='html' />
      <div className='py-3 px-3 hidden md:block'>
        <h1
          data-aos='slide-left'
          data-aos-offset='50'
          className='text-xl sm:text-3xl font-bold '
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default SkillsCard;
