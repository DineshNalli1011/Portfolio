import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5 text-white">
        {/* <h4 className=" text-lg font-normal text-black">WELCOME TO MY WORLD</h4> */}
        <h1 className="text-6xl font-bold ">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Dinesh Das</span>
        </h1>
        <h2 className="text-4xl font-bold">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a motivated and versatile individual, eager to tackle new challenges with a passion for learning and growth with a positive attitude and a strong drive, I am poised to make meaningful contributions and achieve great things.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between text-white">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a
                href="https://www.linkedin.com/in/nallidinesh/"
                target="_blank"
                rel="noopener noreferrer"
                className="bannerIcon"
              >
                <FaLinkedinIn />
              </a>
            </span>

            <span className="bannerIcon">
              <a
                href="https://www.github.com/DineshNalli1011"
                target="_blank"
                rel="noopener noreferrer"
                className="bannerIcon"
              >
                <FaGithub />
              </a>
            </span>

            <span className="bannerIcon">
            <a
                href="https://x.com/dinesh__nalli"
                target="_blank"
                rel="noopener noreferrer"
                className="bannerIcon"
              >
              <FaTwitter />
            </a>  
            </span>

            <span className="bannerIcon">
            <a
                href="https://www.instagram.com/invites/contact/?igsh=85vp04d7n0cs&utm_content=m5d7r2s"
                target="_blank"
                rel="noopener noreferrer"
                className="bannerIcon"
              >
              <FaInstagram />
            </a> 
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Download Resume
          </h2>
          <div className="flex gap-4">
            <a
              href="https://drive.google.com/file/d/17OZkD8blT5ljMdFWlVKVKPPpI7FfQlYJ/view?usp=sharing"
              className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold px-12 py-4 item-center rounded"
            >
              <FiDownload />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
