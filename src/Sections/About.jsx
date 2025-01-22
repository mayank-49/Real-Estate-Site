import React, { useEffect } from "react";
import aboutImg from "../assets/images/about.jpg";
import { useDarkMode } from "../Components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
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
    <section
      id="about"
      className={`${
        darkMode ? "dark bg-black" : "light bg-transparent"
      } w-full m-auto lg:px-28 px-10 py-16 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}
    >
      <div className="sm:flex sm:justify-center lg:justify-start">
        <img
          data-aos="zoom-in"
          src={aboutImg}
          alt="About Image"
          className="rounded-2xl sm:h-[500px] sm:w-[500px] lg:w-[450px] lg:h-[540px] "
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-5 lg:gap-6">
        <h1
          data-aos="zoom-in"
          className="text-red-500 dark:text-red-600 text-lg font-semibold underline underline-offset-4 tracking-wider"
        >
          WHO WE ARE
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-black text-3xl  lg:text-4xl font-semibold leading-10 dark:text-white"
        >
          Your Trusted Real Estate Partner !
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="250"
          className="text-sm sm:text-lg lg:text-xl text-neutral-600 dark:text-white italic text-justify"
        >
          I am a dedicated real estate professional with a passion for helping
          clients find their dream properties. With a focus on trust,
          innovation, and personalized service.
        </p>
        <button data-aos='zoom-in' data-aos-delay='300' className="bg-red-600 dark:bg-red-700 hover:bg-gray-700 hover:text-white dark:hover:bg-white dark:hover:text-black text-sm lg:text-lg py-3 px-5 text-white font-semibold cursor-pointer transform hover:scale-110 transition-transform duration-300 rounded-2xl">
          READ MORE
        </button>
      </div>
    </section>
  );
};

export default About;
