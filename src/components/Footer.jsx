import { FaGithubSquare, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-12 w-max-[800px] border-t border-gray-500 text-center">
      <p className="my-5 text-gray-500">
        All rights reserved <br />
        &copy; 2024 Soam Tripathy
      </p>
      <div className="inline-flex text-gray-500 gap-4 text-3xl">
        <a
          href="https://www.linkedin.com/in/soumyaranjantripathy/y"
          target="blank"
        >
          <FaLinkedin />
        </a>

        <a href="https://github.com/soamtripathy">
          {" "}
          <FaGithubSquare />
        </a>
        <a href="https://www.instagram.com/soamtripathy/">
          <FaInstagram />
        </a>
        <a href="https://x.com/soamtripathy">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Footer;
