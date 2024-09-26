'use client'

import Image from 'next/image'
import Logo from '../src/logo.png'
import LogoDark from '../src/logo_dark.png'
import { useState, useEffect } from 'react'
import ToggleDarkButton from './ToggleDarkButton'
import Link from 'next/link'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  function toggle() {
    if (window.innerWidth <= 768) {
      setIsOpen(!isOpen)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <header className="fixed w-full bg-white dark:bg-dark-color drop-shadow-lg dark:drop-shadow-[0_5px_25px_rgba(255,255,255,0.25)] z-20">
        <div className="max-w-[1440px] m-auto flex justify-between items-center h-14 pl-2 pr-2 md:text-xl">
          <Link href="/" aria-label="Cliquer pour revenir à l'accueil">
            <Image
              className="block dark:hidden"
              height={50}
              src={Logo}
              alt=""
            />
            <Image
              className="hidden dark:block"
              height={50}
              src={LogoDark}
              alt=""
            />
          </Link>
          <div
            className={`md:flex md:static md:h-14 md:w-max md:bg-transparent fixed left-0 top-14 w-full h-screen bg-light-color dark:bg-dark-color overflow-hidden transform transition-transform duration-300 ease-in-out ${
              isOpen
                ? 'translate-y-0 opacity-100 pointer-events-auto'
                : '-translate-y-full opacity-0 pointer-events-none md:pointer-events-auto md:opacity-100 md:translate-y-0'
            }`}
            style={{ zIndex: isOpen ? 10 : -1 }}
          >
            <nav
              id="menu"
              className="flex flex-col items-center mt-16 h-full space-y-8 text-main-color dark:text-white py-8 md:h-14 md:mt-0 md:flex-row md:space-x-8"
            >
              <ul className="space-y-16 text-center text-2xl font-bold md:font-normal md:flex md:items-center md:space-y-0 md:space-x-8">
                <li className="hover:font-bold">
                  <Link
                    className="py-1.5 border-b-4 border-transparent duration-300 ease-in-out hover:border-secondary-color"
                    href="/#projects"
                    onClick={toggle}
                  >
                    PROJETS
                  </Link>
                </li>
                <li className="hover:font-bold">
                  <Link
                    className="py-1.5 border-b-4 border-transparent duration-300 ease-in-out hover:border-secondary-color"
                    href="/#skills"
                    onClick={toggle}
                  >
                    COMPÉTENCES
                  </Link>
                </li>
                <li className="hover:font-bold">
                  <Link
                    className="py-1.5 border-b-4 border-transparent duration-300 ease-in-out hover:border-secondary-color"
                    href="/#contact"
                    onClick={toggle}
                  >
                    CONTACT
                  </Link>
                </li>
                <li>
                  <div className="h-14 flex justify-center items-center">
                    <ToggleDarkButton />
                  </div>
                </li>
              </ul>
            </nav>
          </div>
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
    </>
  )
}

export default Header
