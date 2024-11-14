import React from "react";
import KK from "../../public/KK.jpeg";

import { BiLogoGithub } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Home = () => {
  return (
    <div
      id="home"
      className="flex min-h-screen w-full items-center justify-center "
    >
      <div className="flex flex-col items-center justify-center gap-8 p-5 text-center">
        <img
          src={KK}
          alt=""
          srcset=""
          className="w-[250px] sm:w-[300px] rounded-full "
        />
        <div className="space-y-1 sm:space-y-3 ">
          <h1 className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl">
            {" "}
            Karthik Kalburgi
          </h1>
          <h3 className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-xl font-semibold text-transparent md:text-2xl lg:text-3xl">
            Web Development
          </h3>
          <p className="max-w-[500px] text-sm text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            voluptas tempore magnam omnis, reprehenderit iste nisi voluptatum
            autem non voluptatibus distinctio sapiente voluptates. Possimus,
            quibusdam at sequi ex quidem sunt?
          </p>
          <div className="flex gap-3 flex-auto items-center">
            <BiLogoGithub className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12 items-center" />
            <div className="flex gap-3 ">
              <FaYoutube className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12 items-center" />
            </div>
            <div className="flex gap-3 ">
              <FaLinkedin className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12 items-center" />
            </div>
            <div className="flex gap-3 ">
              <FaTwitter className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12 items-center" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
