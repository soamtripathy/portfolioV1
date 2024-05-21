import profilePic from "../assets/dp.png";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <>
      <div
        className="my-7 sm:my-0 max-w-[1200px] h-[90vh] flex flex-col-reverse sm:flex-row justify-center align-center mx-auto"
        id="home"
      >
        <div className=" flex-col my-auto mx-auto">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-200">
            Hey! I am Soam
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            <TypeAnimation
              sequence={[
                "Frontend Dev",
                1000,
                "Techblogger",
                1000,
                "Tech Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-500">
              with a 1+ years experience
            </p>
          </div>
          <div className="text-5xl flex justify-start gap-16 my-7 text-purple-600">
            <a
              href="https://www.linkedin.com/in/soumyaranjantripathy/y"
              target="blank"
            >
              <AiFillLinkedin />
            </a>

            <a href="https://github.com/soamtripathy">
              {" "}
              <AiFillGithub />
            </a>
            <a href="https://www.instagram.com/soamtripathy/">
              <AiFillInstagram />
            </a>
          </div>
          <div className="relative inline-flex group my-3">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFf] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="/Resume.pdf"
              target="_blank"
              title="Download CV"

              role="button"
              className="w-[200px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="my-auto">
          <img
            className="w-[300px] sm:w-[500px] mx-auto h-auto rounded-full overflow-hidden"
            src={profilePic}
            alt="profile pic"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
