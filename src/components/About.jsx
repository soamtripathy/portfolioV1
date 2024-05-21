
import aboutImg from "../assets/about4.jpeg";

const About = () => {
  return (
    <div className="py-10 text-white h-auto" id="about">
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
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About
                <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Welcome to My World of Innovation and Excellence! Hello there!
                I&apos;m Soumya Ranjan Tripathy, a passionate and forward-thinking
                software engineer on a mission to transform ideas into
                cutting-edge solutions. 🌟 From serving as a Web Development
                Intern at The Sparks Foundation, where I crafted seamless
                payment solutions, to leading as the Chapter Lead at GirlScript
                Bhawanipatna, organizing transformative workshops—I bring a
                wealth of experience that meryges technical prowess with
                effective leadership.
              </p>
            </div>
          </div>
          <div className="flex mt-10 items-center gap-7">
            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-3xl font-semibold text-white">
                10<span>+</span>{" "}
              </h3>
              <p>
                <span className="md:text-base text-xs">Projects</span>
              </p>
            </div>
            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-3xl font-semibold text-white">
                1<span>+</span>{" "}
              </h3>
              <p>
                <span className="md:text-base text-xs">Experience</span>
              </p>
            </div>
            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-3xl font-semibold text-white">
                5<span>+</span>{" "}
              </h3>
              <p>
                <span className="md:text-base text-xs">happy clients</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
