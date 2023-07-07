import React from "react";

const ClickToAction = () => {
  return (
    <>
      <section className="text-black body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="m:text-3xl text-2xl font-medium title-font mb-4 text-black">
              Are you a fleet operator?
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              If so, lets get your vehicles listed today at no cost to you!
            </p>
            <button className="text-white bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg mt-4 md:max-w-xs md:mx-auto">
              Find Out More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClickToAction;
