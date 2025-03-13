import React, { useState } from 'react'
import { headerLogo } from '../assets/images'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'

const Navbar = ({toggleTheme}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen((prev) => !prev)
  }
  return (
    <header className='padding-x py-8 absolute z-10 w-full '>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            height={29}
            weight={129}
            className='mx-0 h-29 w-129'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray hover:text-black'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
           <a href='/'>Sign in</a>
           <span></span>
           <a href='/'>Explore Now</a>
        </div>
        <div className='hidden max-lg:block' onClick={toggleNav}> 
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
      <div className={`fixed top-0 right-0 h-full w-50 bg-white shadow-lg transition-transform duration-6000 ease-in-out ${isNavOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className='flex flex-col justify-center items-center gap-4 p-10'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray hover:text-black'
                onClick={() => setIsNavOpen(false)} // Close the nav when a link is clicked
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar