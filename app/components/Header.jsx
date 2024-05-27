'use client'

import Image from 'next/image'
import Logo from '../src/logo.png'
import LogoDark from '../src/logo_dark.png'
import { useState } from 'react'
import ToggleDarkButton from './ToggleDarkButton'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <header className="fixed w-full bg-white dark:bg-dark-color drop-shadow-lg z-20">
        <div className="max-w-7xl m-auto flex justify-between items-center h-14 pl-2 pr-2 md:text-xl">
          <a href="/">
            <Image
              className="block dark:hidden"
              height={50}
              src={Logo}
              alt="logo"
            />
            <Image
              className="hidden dark:block"
              height={50}
              src={LogoDark}
              alt="logo"
            />
          </a>
          <nav className="hidden h-14 md:flex space-x-4 md:space-x-8 text-main-color dark:text-white">
            <ul className="flex items-center space-x-4 md:space-x-8 text-main-color dark:text-white">
              <li className="hover:font-bold">
                <a
                  className="border-b-4 border-transparent duration-300 ease-in-out hover:border-secondary-color"
                  href="/#skills"
                >
                  COMPÉTENCES
                </a>
              </li>
              <li className="hover:font-bold">
                <a
                  className="border-b-4 border-transparent duration-300 ease-in-out hover:border-secondary-color"
                  href="/#projects"
                >
                  PROJETS
                </a>
              </li>
              <li className="hover:font-bold">
                <a
                  className="border-b-4 border-transparent duration-300 ease-in-out hover:border-secondary-color"
                  href="/#contact"
                >
                  CONTACT
                </a>
              </li>
              <li>
                <div className="h-14 flex justify-center items-center">
                  <ToggleDarkButton />
                </div>
              </li>
            </ul>
          </nav>

          <div className="md:hidden">
            <button
              className="w-10 h-10 relative focus:outline-none bg-white dark:bg-dark-color"
              onClick={toggle}
            >
              <span className="sr-only">Ouvrir le menu de navigation</span>
              <div className="block w-8 h-8 relative ">
                <span
                  aria-hidden="true"
                  className={`block absolute top-1/2 left-0 w-8 h-0.5 bg-main-color dark:bg-white transform transition duration-500 ease-in-out ${
                    isOpen ? 'rotate-45' : '-translate-y-2'
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute top-1/2 left-0 w-8 h-0.5 bg-main-color dark:bg-white transform transition duration-500 ease-in-out ${
                    isOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute top-1/2 left-0 w-8 h-0.5 bg-main-color dark:bg-white transform transition duration-500 ease-in-out ${
                    isOpen ? '-rotate-45' : 'translate-y-2'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed left-0 top-14 w-full h-screen bg-light-color dark:bg-dark-color shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out ${
          isOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: isOpen ? 10 : -1 }}
      >
        <nav className="flex flex-col items-center mt-16 h-full space-y-8 text-main-color dark:text-white py-8">
          <ul className="space-y-16 text-center text-2xl font-bold">
            <li className="hover:font-bold">
              <a
                className="border-b-4 border-transparent duration-300 ease-in-out hover:border-secondary-color"
                href="/#skills"
                onClick={toggle}
              >
                COMPÉTENCES
              </a>
            </li>
            <li className="hover:font-bold">
              <a
                className="border-b-4 border-transparent duration-300 ease-in-out hover:border-secondary-color"
                href="/#projects"
                onClick={toggle}
              >
                PROJETS
              </a>
            </li>
            <li className="hover:font-bold">
              <a
                className="border-b-4 border-transparent duration-300 ease-in-out hover:border-secondary-color"
                href="/#contact"
                onClick={toggle}
              >
                CONTACT
              </a>
            </li>
            <li>
              <div className="h-14 flex justify-center items-center dark:bg-gray-800">
                <ToggleDarkButton />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
