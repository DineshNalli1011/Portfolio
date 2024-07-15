import React from 'react';
import Title from '../layouts/Title';
import { vegetable_basket, Healthcare, coffeeimg, urlshortener } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 bg-bodyColor border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title 
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Vegetable e-commerce"
          des="Fully-featured ecommerce website for selling vegetables using MERN stack."
          src={vegetable_basket}
          githubLink="https://github.com/DineshNalli1011"
          liveLink="https://your-live-site.com/social-media-clone"
        />
        <ProjectsCard
          title="url shortener"
          des="Web application for shortening URLs, generating QR codes, and providing statistical analysis using React, TailwindCSS, Shadcn UI."
          src={urlshortener}
          githubLink="https://github.com/DineshNalli1011/TrimURL"
          liveLink="https://custom-url.vercel.app/"
        />
        <ProjectsCard
          title="coffee App"
          des="Developed a modern coffee app using React, Tailwind CSS, and Framer Motion, blending responsive design with smooth animations for an engaging user experience."
          src={coffeeimg}
        />
        <ProjectsCard
          title="health care"
          des="Machine learning model to predict diseases based on input symptoms and medical data."
          src={Healthcare}
        />
        {/* <ProjectsCard
          title="E-commerce Website"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
      </div>
    </section>
  );
}

export default Projects;
