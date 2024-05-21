import React from "react";
import proj1 from "../assets/spotifyClone.png";
import proj2 from "../assets/chatGPTClone.png";
import proj3 from "../assets/currencyConverter.png";
import proj4 from "../assets/todo.png";
import proj5 from "../assets/passwordgen.png";
import proj6 from "../assets/portfolio.png";

const Work = () => {
  return (
    <div className="py-6 max-w[1200px] auto" id="work">
      <div className="mx-auto px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl lg:text-3xl text-white">
              My <span>Projects</span>
            </h2>
            <p className="text-gray-500">
              These are my latest projects that I have worked on.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <a
            href="https://spotify-clone-soamtripathy.vercel.app/"
            target="blank"
            className="group h-48 overflow-hidden rounded-lg  shadow-lg md:h-80"
          >
            <img
              src={proj1}
              alt=""
              className="h-full w-full object-cover object-center transition-none duration-200 group-hover:scale-110"
            />
          </a>
          <a
            href="https://password-generator-soamtripathy.vercel.app/"
            target="blank"
            className="group h-48 overflow-hidden rounded-lg  shadow-lg md:h-80"
          >
            <img
              src={proj6}
              alt=""
              className="h-full w-full object-cover object-center transition-none duration-200 group-hover:scale-110"
            />
          </a>
          <a
            href="https://chatgpt-clone-soamtripathy.vercel.app/"
            target="blank"
            className="group h-48 overflow-hidden rounded-lg  shadow-lg md:h-80"
          >
            <img
              src={proj2}
              loading="lazy"
              alt=""
              className="h-full w-full object-cover object-center transition-none duration-200 group-hover:scale-110"
            />
          </a>
          <a
            href="https://currency-converter-soamtripathy.vercel.app/"
            target="blank"
            className="group h-48 overflow-hidden rounded-lg  shadow-lg md:h-80"
          >
            <img
              src={proj3}
              alt=""
              className="h-full w-full object-cover object-center transition-none duration-200 group-hover:scale-110"
            />
          </a>
          <a
            href="https://to-do-list-soamtripathy.vercel.app/"
            target="blank"
            className="group h-48 overflow-hidden rounded-lg  shadow-lg md:h-80"
          >
            <img
              src={proj4}
              alt=""
              className="h-full w-full object-cover object-center transition-none duration-200 group-hover:scale-110"
            />
          </a>
          <a
            href="https://password-generator-soamtripathy.vercel.app/"
            target="blank"
            className="group h-48 overflow-hidden rounded-lg  shadow-lg md:h-80"
          >
            <img
              src={proj5}
              alt=""
              className="h-full w-full object-cover object-center transition-none duration-200 group-hover:scale-110"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
