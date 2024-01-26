import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsdata } from '../components/data';
import useBackgroundImg from '../helper/useBackgroundImg';

const Projects = () => {
  const styles = useBackgroundImg(
    'https://www.pcworld.com/wp-content/uploads/2023/04/sale_301208_article_image-100900761-orig.jpg?quality=50&strip=all'
  );
  return (
    <div className='bg-black '>
      <div className='text-white h-svh bg-img' style={styles.header}></div>
      <div style={styles.content} className=' py-72 text-white'>
        <h1
          data-aos='zoom-out'
          data-aos-duration='500'
          data-aos-once='true'
          className='text-5xl font-bold m-3'
        >
          Projects
        </h1>
        <div
          data-aos='fade-up'
          data-aos-duration='500'
          data-aos-once='true'
          className='text-center text-xl'
        >
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
        {projectsdata.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
