import Image from 'next/image'
import Logo from '../src/logo.png'

function Header() {
  return (
    <header className="fixed w-full bg-white dark:bg-dark-color drop-shadow-lg z-10">
      <div className="max-w-7xl m-auto flex justify-between items-center h-14 pl-2 pr-2 md:text-xl">
        <Image height={50} src={Logo} alt="logo" />

        <nav>
          <ul className="flex space-x-4 md:space-x-8 text-main-color dark:text-white">
            <li className="hover:font-bold">
              <a
                className="border-b-4 border-transparent duration-300 ease-in-out hover:border-secondary-color"
                href="#skills"
              >
                COMPÉTENCES
              </a>{' '}
            </li>
            <li className="hover:font-bold">
              <a
                className="border-b-4 border-transparent duration-300 ease-in-out hover:border-secondary-color"
                href="#projects"
              >
                PROJETS
              </a>{' '}
            </li>
            <li className="hover:font-bold">
              <a
                className="border-b-4 border-transparent duration-300 ease-in-out hover:border-secondary-color"
                href="#contact"
              >
                CONTACT
              </a>{' '}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
