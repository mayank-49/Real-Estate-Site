import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {FaXmark, FaBars} from "react-icons/fa6";
import logo from "../assets/images/logo.png";
import { useDarkMode } from './DarkModeContext';
import {FaPhoneAlt, FaUserCircle} from "react-icons/fa";

const Header = () => {

  const { darkMode, toggleDarkMode } = useDarkMode();
  const[isMenuOpen, setIsMenuOpen] =  useState(false);

  function toggleMenu(){
    setIsMenuOpen(!isMenuOpen);
  }

  function closemenu(){
    setIsMenuOpen(false);
  }

  const navItems = [
    {
      link: 'Home' , path: 'hero'
    },
    {
      link: 'About' , path: 'about'
    },
    {
      link: 'Properties' , path: 'properties'
    },
    {
      link: 'Services' , path: 'services'
    },
    {
      link: 'Testimonials' , path: 'testimonials'
    },
    {
      link: 'Contact' , path: 'contact'
    },
  ]

  return (
    <nav className={`${darkMode ? 'dark bg-black' : "light bg-[#f3f3f3]"} flex justify-between items-center gap-4 lg:px-20 px-4 py-2 sticky top-0 z-30 border-b-4 border-red-600`}>
      <div id='logo'>
        <img src={logo} alt="company-logo" className='lg:w-[150px] w-[120px] dark:invert'/>
      </div>
      <ul className='lg:flex justfy-center items-center gap-8 hidden'>
        {navItems.map(({link,path})=>(
          <Link key={path} className='text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
        ))}
      </ul>

      <div className='lg:flex hidden justify-center items-center lg:gap-8 gap-2'>
        <div className="flex justify-center items-center lg:gap-3 gap-1">
          <FaPhoneAlt className='size-5 text-red-600'/>
          <h1 className='lg:text-lg text-sm text-black dark:text-white font-semibold'>930 965 9552</h1>
        </div>
        <FaUserCircle className='size-10 text-red-600 cursor-pointer'/>
      </div>

      <div className='flex justify-center items-center lg:hidden' onClick={toggleMenu}>
        {isMenuOpen ? <FaXmark className='text-black dark:text-white text-2xl cursor-pointer'/> : <FaBars className='text-black dark:text-white text-2xl cursor-pointer'/>}
      </div>

      <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`}>
        <ul className='flex flex-col justify-center items-center gap-2 w-full'>
          {navItems.map(({link,path})=>(
            <Link onClick={closemenu} key={path} className='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Header
