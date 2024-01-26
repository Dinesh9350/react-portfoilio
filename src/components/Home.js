import React from 'react';

import IntroImg from '../assets/intro-bg.jpg';
import { Link } from 'react-router-dom';
import useBackgroundImg from '../helper/useBackgroundImg';

const Home = () => {
  const styles = useBackgroundImg(IntroImg);

  return (
    <div className='bg-black'>
      <div className='text-white h-svh bg-img' style={styles.header}></div>
      <div style={styles.content} className='text-white'>
        <div className=' text-white text-xl flex flex-wrap justify-center items-center h-screen pb-20'>
          <div>
            <p
              data-aos='zoom-out'
              data-aos-duration='1000'
              data-aos-once='true'
              data-aos-delay='300'
              className='text-2xl m-3'
            >
              HI, I AM A
            </p>
            <h1
              data-aos='zoom-out'
              data-aos-duration='1000'
              data-aos-once='true'
              data-aos-delay='300'
              className='text-5xl font-bold m-3'
            >
              React.js Developer
            </h1>
            <div>
              <Link to='/projects'>
                <button
                  data-aos='slide-right'
                  data-aos-offset='0'
                  data-aos-duration='1000'
                  data-aos-delay='300'
                  className='bg-blue-500 text-black p-2 px-3 rounded-md  m-3 hover:bg-blue-700 font-semibold hover:text-white'
                >
                  PROJECTS
                </button>
              </Link>
              <Link to='/contact'>
                <button
                  data-aos='slide-left'
                  data-aos-offset='0'
                  data-aos-duration='1000'
                  data-aos-delay='300'
                  className='text-white border p-2 px-3 rounded-md  m-3 font-semibold hover:bg-white hover:text-black'
                >
                  CONTACT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
