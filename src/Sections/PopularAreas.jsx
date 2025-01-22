import React, { useEffect } from "react";
import { useDarkMode } from "../Components/DarkModeContext";
import area1 from "../assets/images/area1.jpg";
import area2 from "../assets/images/area2.jpg";
import area3 from "../assets/images/area3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const PopularAreas = () => {
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
    <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"}`}>
      <section
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-red-100"
        } lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col lg:px-20 px-6 py-20 gap-20`}
      >
        <div
          id="top"
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
        >
          <div>
            <h1 data-aos="zoom-in" className="text-red-500 dark:text-red-600 font-semibold text-lg underline underline-offset-4">
              POPULAR AREAS
            </h1>
            <h1
              data-aos="zoom-in"
              className="text-black text-[30px] sm:text-[35px] lg:text-[40px] font-semibold leading-10 mt-3 dark:text-white"
            >
              Explore most <br />
              popular areas
            </h1>
          </div>
          <div className="grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6">
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              style={{ backgroundImage: `url(${area1})` }}
              className="h-[400px]  bg-cover bg-center rounded-xl"
            ></div>
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              style={{ backgroundImage: `url(${area2})` }}
              className="h-[400px] bg-cover bg-center rounded-xl"
            ></div>
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              style={{ backgroundImage: `url(${area3})` }}
              className="h-[400px] bg-cover bg-center rounded-xl"
            ></div>
          </div>
        </div>
        <div
          id="bottom"
          className="w-full grid grid-cols-3 justify-center items-center gap-3 lg:gap-6 "
        >
          <div
            data-aos="slide-up"
            data-aos-delay="200"
            className="flex justify-center items-center gap-2 lg:gap-8 w-full"
          >
            <h1 className="text-black text-[40px] lg:text-7xl font-semibold dark:text-white">
              5K
            </h1>
            <h1 className="text-[12px] lg:text-lg text-neutral-600 dark:text-white">
              ACTIVE <br />
              LISTINGS
            </h1>
          </div>
          <div
            data-aos="slide-up"
            data-aos-delay="200"
            className="flex justify-center items-center gap-2 lg:gap-8 w-full"
          >
            <h1 className="text-black text-[40px] lg:text-7xl font-semibold dark:text-white">
              9K
            </h1>
            <h1 className="text-[12px] lg:text-lg text-neutral-600 dark:text-white">
              SOLID <br />
              LISTINGS
            </h1>
          </div>
          <div
            data-aos="slide-up"
            data-aos-delay="200"
            className="flex justify-center items-center gap-2 lg:gap-8 w-full"
          >
            <h1 className="text-black text-[40px] lg:text-7xl font-semibold dark:text-white">
              6K
            </h1>
            <h1 className="text-[12px] lg:text-lg text-neutral-600 dark:text-white">
              CLIENTS <br />
              WE'VE SERVED
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularAreas;
