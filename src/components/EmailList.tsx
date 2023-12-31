import React from "react";

const EmailList = () => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Join Our mailing list
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              and never miss and update
            </p>
          </div>
          <div className="flex lg:w-1/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 sm:space-x-4 sm:space-y-0 space-y-4">
            <div className="relative sm:mb-0 flex-grow w-full">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-gray-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmailList;
