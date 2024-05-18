import React from "react";
import aboutImg from "../assets/about4.jpeg";

const About = () => {
  return (
    <div className="py-10 text-white bg-[#232325] h-auto">
      <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 mx-w-6xl mx-auto">
        <div>
          <div className="w-[400px] h-full">
            <img
              src={aboutImg}
              alt=""
              className="object-cover rounded-xl h-[300px] filter grayscale brightness-50"
            />
          </div>
        </div>
        <div>
          <div className="p-2">
            <div className="text--gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About
                <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
                veniam natus, ipsam nesciunt eum quidem. Ullam dolores suscipit
                distinctio nobis, tempora placeat recusandae natus labore
                assumenda aut, repudiandae sed, excepturi sunt? Soluta a omnis
                voluptates ipsam debitis! Necessitatibus debitis modi atque
                maxime quidem! Quibusdam consequuntur odio, animi commodi
                aliquid dolores!
              </p>
            </div>
          </div>
          <div className="flex mt-10 items-center gap-7">
            <div className="bg-[#333333]/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-3xl font-semibold text-white">10<span>+</span>{" "}</h3>
                <p><span className="md:text-base text-xs">Projects</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
