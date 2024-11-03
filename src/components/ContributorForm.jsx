import React from "react";

function ContributorForm() {
  return (
    <section className="bg-gray-900 text-gray-200 py-16 px-5 flex justify-center items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Side: Title */}
        <div className="text-left">
          <h2 className="text-5xl font-bold text-white">
            Become <span className="text-teal-400">Contributor</span>
          </h2>
        </div>

        {/* Right Side: Form */}
        <div className="bg-gray-800 p-8 rounded-lg w-full md:w-1/2 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-gray-700 text-gray-300 p-3 rounded-lg focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-gray-700 text-gray-300 p-3 rounded-lg focus:outline-none"
          />
          <input
            type="text"
            placeholder="Designation @ Company"
            className="w-full bg-gray-700 text-gray-300 p-3 rounded-lg focus:outline-none"
          />
          <button className="w-full bg-teal-500 text-gray-900 font-semibold p-3 rounded-lg">
            Send
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContributorForm;
