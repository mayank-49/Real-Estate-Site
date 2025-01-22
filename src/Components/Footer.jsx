import React from "react";
import { useDarkMode } from "./DarkModeContext";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaBuilding,
  FaMobile,
  FaFax,
  FaArrowUp,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { IoMdMail } from "react-icons/io";
import prop7 from "../assets/images/prop7.jpg";
import prop8 from "../assets/images/prop8.jpg";

const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <footer
        className={`${
          darkMode ? "dark bg-black" : "light bg-gray-800"
        } w-full m-auto lg:px-16 px-10 py-16 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`}
      >
        <div className="flex flex-col items-start justify-center gap-5">
          <h1 className="text-red-600 text-2xl font-semibold underline underline-offset-4">About Us</h1>
          <p className="text-slate-300 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            doloribus nobis repellat vero praesentium esse id numquam.
            Voluptates, velit consequuntur?
          </p>
          <div
            id="social-icons"
            className="flex justify-start items-center gap-4 mt-4"
          >
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaFacebookF className="size-5" />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaInstagram className="size-5" />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaTwitter className="size-5" />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaYoutube className="size-5" />
            </div>
          </div>
          <h1 className="text-white mt-8">
            Copyright Real Estate, All Rights Reserved
          </h1>
        </div>

        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-red-600 text-2xl font-semibold underline underline-offset-4">Contact Us</h1>
          <div className="flex justify-center items-center gap-3">
            <FaBuilding className="text-white size-5" />
            <p className="text-slate-300 text-md">
              10845 Griffith Peak Dr, Las Vegas, NV 89135
            </p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaMobile className="text-white size-5" />
            <p className="text-slate-300 text-md">+91 879 098 8901</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaFax className="text-white size-5" />
            <p className="text-slate-300 text-md">+91 123 678 0912</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <IoMdMail className="text-white size-5" />
            <p className="text-slate-300 text-md">office23@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-2xl text-red-600 font-semibold underline underline-offset-4">
            Latest Properties
          </h1>
          <div className="flex justify-center items-center gap-4">
            <img
              src={prop7}
              alt=""
              className="w-[120px] rounded-lg transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
            <div>
              <h1 className="text-white text-lg">Villa with amazing view</h1>
              <p className="text-slate-400">$ 278.99</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <img
              src={prop8}
              alt=""
              className="w-[120px] rounded-lg transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
            <div>
              <h1 className="text-white text-lg">Sea View Villa</h1>
              <p className="text-slate-400">$ 789.99</p>
            </div>
          </div>
        </div>
      </footer>

      {/* slide-to-top button */}
      <div
        id="icon-arrow"
        className="bg-red-600 p-4 rounded-full hover:bg-gray-700 cursor-pointer fixed lg:bottom-12 bottom-6 right-6"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="size-6 text-white" />
        </Link>
      </div>

      {/* dark mode toggle button section */}
      <div>
        <button
          onClick={toggleDarkMode}
          className=" p-4 rounded-full bg-orange-500 hover:bg-orange-400 fixed lg:top-52 right-6 top-40"
        >
          {darkMode ? (
            <FaMoon size={25} className="text-black" />
          ) : (
            <FaSun size={25} className="text-black" />
          )}
        </button>
      </div>
    </>
  );
};

export default Footer;
