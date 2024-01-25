import React from 'react';

import IntroImg from '../assets/intro-bg.jpg';
import { Link } from 'react-router-dom';

const styles = {
  header: {
    backgroundImage: `url(${IntroImg})`,
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
  },

  content: {
    height: '100%',
    width: '100%',
    top: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'absolute',
  },
};

const Home = () => {
  return (
    <div className='bg-black '>
      <div className='text-white h-svh bg-img' style={styles.header}></div>
      <div style={styles.content} className='pt-64 text-white'>
        <p className='text-2xl m-3'>HI, I AM A</p>
        <h1 className='text-5xl font-bold m-3'>React.js Developer</h1>
        <Link to='/projects'>
          <button className='bg-blue-500 text-black p-2 px-3 rounded-md  m-3 hover:bg-blue-700 font-semibold hover:text-white'>
            PROJECTS
          </button>
        </Link>
        <Link to='/contact'>
          <button className='text-white border p-2 px-3 rounded-md  m-3 font-semibold hover:bg-white hover:text-black'>
            CONTACT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
