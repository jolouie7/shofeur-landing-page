import React from "react";
import {
  FaTiktok,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">
                Contact Us
              </h2>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">
                Blog
              </h2>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">
                Help Center
              </h2>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">
                Privacy Policy
              </h2>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">
                Terms & Conditions
              </h2>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 bg-opacity-75">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2023 Shofeur
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center items-center sm:justify-start">
              <a className="text-gray-400" href="#">
                <FaInstagram />
              </a>
              <a className="ml-3 text-gray-400">
                <FaFacebookF />
              </a>
              <a className="ml-3 text-gray-400">
                <FaTwitter />
              </a>
              <a className="ml-3 text-gray-400" href="#">
                <FaLinkedinIn />
              </a>
              <a className="ml-3 text-gray-400" href="#">
                <FaYoutube />
              </a>
              <a className="ml-3 text-gray-400" href="#">
                <FaTiktok />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
