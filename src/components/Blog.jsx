import React from "react";
import blog1 from "../assets/spaceTimeTradeOff.png";
import blog2 from "../assets/varchar.png";
import blog3 from "../assets/eventPropagation.png";
import blog4 from "../assets/bsVsLs.png";
import blog5 from "../assets/abstraction.png";
import blog6 from "../assets/bisect.png";

const Blog = () => {
  return (
    <div className="py-6 max-w[1200px] auto" id="blog">
      <div className="mx-auto px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl lg:text-3xl text-white">
              My <span>Blogs</span>
            </h2>
            <p className="text-gray-500">
              I write blogs on various topics. Here are some of them.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <a
            href="https://soamtripathy.hashnode.dev/space-time-trade-off" target="blank"
            className="group h-48 overflow-hidden rounded-lg  shadow-lg md:h-80"
          >
            <img
              src={blog1}
              alt=""
              className="h-full w-full object-cover object-center transition-none duration-200 group-hover:scale-110"
            />
          </a>
          <a
            href="https://soamtripathy.hashnode.dev/varchar-vs-char-in-sql" target="blank"
            className="group h-48 overflow-hidden rounded-lg  shadow-lg md:h-80"
          >
            <img
              src={blog2}
              alt=""
              className="h-full w-full object-cover object-center transition-none duration-200 group-hover:scale-110"
            />
          </a>
          <a
            href="https://soamtripathy.hashnode.dev/understanding-event-propagation-in-javascript-bubbling-vs-capturing-explained" target="blank"
            className="group h-48 overflow-hidden rounded-lg  shadow-lg md:h-80"
          >
            <img
              src={blog3}
              alt=""
              className="h-full w-full object-cover object-center transition-none duration-200 group-hover:scale-110"
            />
          </a>
          <a
            href="https://soamtripathy.hashnode.dev/why-binary-search-is-better-than-linear-search" target="blank"
            className="group h-48 overflow-hidden rounded-lg  shadow-lg md:h-80"
          >
            <img
              src={blog4}
              alt=""
              className="h-full w-full object-cover object-center transition-none duration-200 group-hover:scale-110"
            />
          </a>
          <a
            href="https://soamtripathy.hashnode.dev/abstraction-vs-encapsulation" target="blank"
            className="group h-48 overflow-hidden rounded-lg  shadow-lg md:h-80"
          >
            <img
              src={blog5}
              alt=""
              className="h-full w-full object-cover object-center transition-none duration-200 group-hover:scale-110"
            />
          </a>
          <a
            href="https://soamtripathy.hashnode.dev/python-bisect-module" target="blank"
            className="group h-48 overflow-hidden rounded-lg  shadow-lg md:h-80"
          >
            <img
              src={blog6}
              alt=""
              className="h-full w-full object-cover object-center transition-none duration-200 group-hover:scale-110"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
