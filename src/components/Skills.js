import React from 'react';
import skillsBg from '../assets/skills.png';
import SkillsCard from './SkillsCard';
import { skillsdata } from './data';

const styles = {
  header: {
    backgroundImage: `url(${skillsBg})`,
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

const Skills = () => {
  return (
    <div className=''>
      <div className='text-white h-svh bg-img' style={styles.header}></div>
      <div className='' style={styles.content}>
        <div className='flex flex-wrap justify-center items-center mt-20 lg:mx-48'>
          {skillsdata.map((skill) => {
            return <SkillsCard key={Skills.id} {...skill} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
