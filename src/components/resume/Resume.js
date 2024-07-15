import React, { useState } from 'react';
import Title from '../layouts/Title'; // Adjust the path as per your project structure
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from "./Experience";

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() => handleTabClick('education')}
            className={`cursor-pointer py-2 px-4 text-center ${
              activeTab === 'education' ? 'border-designColor rounded-lg bg-designColor text-white' : 'border-transparent text-white'
            } resumeLi hover:border-designColor hover:text-white hover:bg-designColor transition-colors duration-300`}
          >
            Education
          </li>
          <li
            onClick={() => handleTabClick('skills')}
            className={`cursor-pointer py-2 px-4 text-center ${
              activeTab === 'skills' ? 'border-designColor rounded-lg bg-designColor text-white' : 'border-transparent text-white'
            } resumeLi hover:border-designColor hover:text-white hover:bg-designColor transition-colors duration-300`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => handleTabClick('experience')}
            className={`cursor-pointer py-2 px-4 text-center ${
              activeTab === 'experience' ? 'border-designColor rounded-lg bg-designColor text-white' : 'border-transparent text-white'
            } resumeLi hover:border-designColor hover:text-white hover:bg-designColor transition-colors duration-300`}
          >
            Experience
          </li>
          <li
            onClick={() => handleTabClick('achievements')}
            className={`cursor-pointer py-2 px-4 text-center ${
              activeTab === 'achievements' ? 'border-designColor rounded-lg bg-designColor text-white' : 'border-transparent text-white'
            } resumeLi hover:border-designColor hover:text-white hover:bg-designColor transition-colors duration-300`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {activeTab === 'education' && <Education />}
      {activeTab === 'skills' && <Skills />}
      {activeTab === 'achievements' && <Achievement />}
      {activeTab === 'experience' && <Experience />}
    </section>
  );
}

export default Resume;
