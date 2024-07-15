import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, githubLink, liveLink }) => {
  return (
    <div className="w-full p-4 xl:px-12 xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-white border border-gray-200 hover:bg-gray-200 hover:shadow-lg transition duration-300 transform hover:translate-y-[-10px]">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover rounded-lg group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt={title}
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-gray-800 font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center text-gray-600 hover:text-designColor duration-300 cursor-pointer"
              >
                <BsGithub />
              </a>
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center text-gray-600 hover:text-designColor duration-300 cursor-pointer"
              >
                <FaGlobe />
              </a>
            </div>
          </div>
          <p className="text-sm text-gray-600 tracking-wide mt-3 hover:text-gray-900 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;
