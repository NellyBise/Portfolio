'use client'

import Image from 'next/image'
import Logo from '../src/logo.png'
import LogoDark from '../src/logo_dark.png'
import { useState } from 'react'
import { useDarkMode } from '../contexts/Darkmode'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const { toggleDark } = useDarkMode()

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
                <div className="h-14 flex justify-center items-center dark:bg-gray-800">
                  <button
                    onClick={toggleDark}
                    className="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      className="fill-violet-700 block dark:hidden"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                    <svg
                      className="fill-yellow-500 hidden dark:block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
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
                <button
                  onClick={toggleDark}
                  className="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    className="fill-violet-700 block dark:hidden"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                  <svg
                    className="fill-yellow-500 hidden dark:block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
