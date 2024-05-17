import Image from 'next/image'
import Logo from '../../src/logo.png'

export function Header() {
  return (
    <header className="fixed w-full bg-secondary-color z-10">
      <div className="max-w-7xl m-auto flex justify-between items-center h-14 pl-2 pr-2 md:text-xl">
        <Image width={60} src={Logo} alt="logo" />

        <nav>
          <ul className="flex space-x-4 md:space-x-8">
            <li>COMPÉTENCES</li>
            <li>PROJETS</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
