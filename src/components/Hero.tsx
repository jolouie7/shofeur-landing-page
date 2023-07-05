import React from "react";

const Hero = () => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-white">
              Chauffeured Reservations Made Simple
            </h1>
            <div className="flex sm:justify-center ">
              <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  placeholder="Pickup location"
                  className="w-full bg-gray-800 rounded bg-opacity-40 border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out max-w-2xl"
                />
              </div>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
