import React from "react";
import Button from "./Button";
import { FaArrowRightLong } from "react-icons/fa6";

const Collection = () => {
  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-4 mx-w-[1440px] flex justify-between">
        <div>
          <button className="text-teal-400 p-2  px-4 bg-[#232323] rounded-full">
            DEV STORIES
          </button>
          <h1 className="text-4xl font-bold mb-8">
            Dive into our collection <br /> of engaging Dev <br />
            Stories.
          </h1>
        </div>

        <div className="relative top-32">
          <Button className="right-5">
            <span>LETS START -ITS FREE</span>
            <FaArrowRightLong />
          </Button>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-3">
          {/* Blog card 1 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1720048170970-3848514c3d60?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blog Image 1"
              className="rounded-lg mb-4"
            />
            <p className="text-sm text-gray-400">Feb 1, 2024</p>
            <h2 className="text-xl font-bold mb-2">
              Unlocking the Power of SEO: Keyword Research
            </h2>
            <p>A Guide to Choosing the Right Tools</p>
            <a href="#" className="text-teal-400 hover:text-teal-500">
              Read More
            </a>
          </div>
          {/* Blog card 2 and 3 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1720048170970-3848514c3d60?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blog Image 1"
              className="rounded-lg mb-4"
            />
            <p className="text-sm text-gray-400">Feb 1, 2024</p>
            <h2 className="text-xl font-bold mb-2">
              Unlocking the Power of SEO: Keyword Research
            </h2>
            <p>A Guide to Choosing the Right Tools</p>
            <a href="#" className="text-teal-400 hover:text-teal-500">
              Read More
            </a>
          </div>
          {/* Blog card 2 and 3 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1720048170970-3848514c3d60?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blog Image 1"
              className="rounded-lg mb-4"
            />
            <p className="text-sm text-gray-400">Feb 1, 2024</p>
            <h2 className="text-xl font-bold mb-2">
              Unlocking the Power of SEO: Keyword Research
            </h2>
            <p>A Guide to Choosing the Right Tools</p>
            <a href="#" className="text-teal-400 hover:text-teal-500">
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
