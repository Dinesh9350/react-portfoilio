import React from 'react';
import ProjectCard from './ProjectCard';
import data from '../components/data';

const styles = {
  header: {
    backgroundImage: `url('https://www.pcworld.com/wp-content/uploads/2023/04/sale_301208_article_image-100900761-orig.jpg?quality=50&strip=all')`,
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

const Projects = () => {
  return (
    <div className='bg-black '>
      <div className='text-white h-svh bg-img' style={styles.header}></div>
      <div style={styles.content} className='py-60 text-white'>
        <h1 className='text-5xl font-bold m-3'>Projects</h1>
        <div className='text-center text-lg'>
          <p>
            <span className='font-semibold'>Libraries: </span>React.js, Redux,
            React Router Dom,
          </p>
          <p>
            <span className='font-semibold'>Frameworks: </span> Tailwind Css,
            Bootstrap
          </p>
          <p>
            <span className='font-semibold'>Languages: </span> Javascript, Html,
            Css
          </p>
        </div>
      </div>
      <div className='p-10  flex  flex-wrap justify-center items-center'>
        {data.map((project) => {
          return <ProjectCard {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
