import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  // 'handleNav' is a function that toggles the 'nav' state when called.
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="z-10 text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l my-auto">
      <h1 className="text-3xl font-bold ml-4 primary-color">Soam Tripathy</h1>
      <ul className="hidden md:flex">
        <li className="p-2 cursor-pointer">
          <a href="#home">Home</a>
        </li>
        <li className="p-2 cursor-pointer">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link
            activeClass="active"
            to="blog"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Blogs
          </Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:flex">
        {/* Renders the AiOutlineClose icon if 'nav' is true, otherwise renders
        the AiOutlineMenu icon. Both icons have a size of 20. */}
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "z-10 text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121]  duration-500  ease-in-out"
            : "fixed left-[-100%] top-0  h-full ease-in-out duration-500"
        }
      >
        <h1 className="text-3xl m-4 primary-color">Soam Tripathy</h1>
        <ul className="p-8 text-2xl">
          <li className="p-2">
            <a href="#home">Home</a>
          </li>
          <li className="p-2">
            <a href="#about">About</a>
          </li>
          <li className="p-2">
            <a href="#skills">Skills</a>
          </li>
          <li className="p-2">
            <a href="#work">Work</a>
          </li>
          <li className="p-2">
            <a href="#blog">Blogs</a>
          </li>
          <li className="p-2">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
