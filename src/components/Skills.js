import React from 'react';
import skillsBg from '../assets/skills.jpg';
import SkillsCard from './SkillsCard';
import { skillsdata } from './data';
import useBackgroundImg from '../helper/useBackgroundImg';
import useScrollToTop from '../helper/useScrollToTop';

const Skills = () => {
  const scroll = useScrollToTop();
  const styles = useBackgroundImg(skillsBg);
  return (
    <div className=''>
      <div className='text-white h-svh bg-img' style={styles.header}></div>
      <div className='' style={styles.content}>
        <div className='flex flex-wrap justify-center items-center lg:mx-48 mt-16'>
          {skillsdata.map((skill) => {
            return <SkillsCard key={skill.id} {...skill} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
