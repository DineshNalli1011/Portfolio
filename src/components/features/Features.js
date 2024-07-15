import React from 'react';
import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe} from "react-icons/fa";
import { /*SiProgress*/ SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        
        <Card
          title="Web Development"
          des="Full stack developer adept at building robust web applications, proficient in frontend and backend technologies to deliver scalable solutions."
          icon={<AiFillAppstore />}
        />
        <Card
          title="UX Design"
          des="Skilled UX designer passionate about creating intuitive and impactful user experiences, blending creativity with user-centered design principles."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Proficient in website deployment and hosting management, ensuring seamless performance and reliability for optimal user experience."
          icon={<FaGlobe />}
        />
        {/* <Card
          title="Video Editing"
          des=""
          icon={<FaVideo />}
        /> */}
        
        {/* <Card
          title="SEO Optimisation"
          des=""
          icon={<SiProgress />}
        /> */}
        
      </div>
    </section>
  );
}

export default Features;
