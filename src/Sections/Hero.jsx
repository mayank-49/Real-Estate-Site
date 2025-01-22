import React, { useEffect } from "react";
import { useDarkMode } from "../Components/DarkModeContext";
import heroimg from "../assets/images/hero1.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <div className={`${darkMode ? "dark bg-black" : "light bg-white"} pt-4`}>
        <section
          id="hero"
          className="w-[95%] h-[550px] lg:h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-5 lg:gap-7 z-20"
          style={{ backgroundImage: `url(${heroimg})` }}
        >
          <h1
            data-aos="zoom-in"
            className="text-white text-3xl sm:text-5xl lg:text-6xl font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] "
          >
            Find your next home in NEW YORK
          </h1>
          <p
            data-aos="zoom-in"
            className="text-white text-md sm:text-lg lg:text-xl lg:pr-[500px] pr-0"
          >
            Passionate about connecting clients with their dream properties, I
            specialize in providing reliable, client-focused, and innovative
            real estate solutions.
          </p>
        </section>
      </div>

      <div
        className={`${
          darkMode ? "dark bg-black" : "light bg-transparent"
        } z-10`}
      >
        <div
          id="form"
          data-aos="zoom-in"
          className={`${
            darkMode ? "dark bg-gray-800" : "light bg-white"
          } lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14`}
        >
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">
              LOCATION
            </h1>
            <input
              type="text"
              placeholder="Enter an address, state, city or pincode"
              className=" p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1] text-gray-500 outline-none"
            />
          </div>
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">TYPE</h1>
            <select
              name="selectOption"
              id="selectProperty"
              className="bg-white p-2 border-b-[1px] border-[#c9c7c1] w-full mt-2 outline-none text-gray-500 text-md "
            >
              <option value="option" disabled selected>
                Select Property
              </option>
              <option value="Option1">Rental</option>
              <option value="Option2">Sales</option>
              <option value="Option3">Commercial</option>
            </select>
          </div>
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">
              CATEGORY
            </h1>
            <select
              name="selectOption"
              id="selectCategory"
              className="bg-white p-2 border-b-[1px] border-[#c9c7c1] w-full mt-2 outline-none text-gray-500 text-md "
            >
              <option value="" disabled selected>
                Property Category
              </option>
              <option value="Option1">Appartments</option>
              <option value="Option2">Duples</option>
              <option value="Option3">Condos</option>
            </select>
          </div>
          <div className="w-full">
            <button className="bg-red-600 dark:bg-red-700 hover:bg-gray-700 hover:text-white dark:hover:bg-white dark:hover:text-black text-lg p-4 w-full text-white font-semibold cursor-pointer transform hover:scale-110 transition-transform duration-300 rounded-2xl">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
