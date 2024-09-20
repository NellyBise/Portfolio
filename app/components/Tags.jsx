import NextIcon from '../../public/logos/Next.png'
import ReactIcon from '../../public/logos/React.png'
import HTMLIcon from '../../public/logos/HTML.png'
import CSSIcon from '../../public/logos/CSS.png'
import JavaScriptIcon from '../../public/logos/JS.png'
import SassIcon from '../../public/logos/Sass.png'
import TailwindIcon from '../../public/logos/Tailwind.png'

import Image from 'next/image'

export default function Tags({ tagsContent }) {
  const iconsMap = {
    React: <Image src={ReactIcon} alt="React" className="h-6 w-6" />,
    Nextjs: (
      <Image
        src={NextIcon}
        alt="Next"
        className="h-6 w-6 rounded-full dark:p-[1px] dark:bg-white"
      />
    ),
    HTML: <Image src={HTMLIcon} alt="HTML" className="h-6 w-6" />,
    CSS: <Image src={CSSIcon} alt="CSS" className="h-6 w-6" />,
    JavaScript: (
      <Image src={JavaScriptIcon} alt="JavaScript" className="h-6 w-6" />
    ),
    Sass: <Image src={SassIcon} alt="Sass" className="h-6 w-6" />,
    Tailwind: <Image src={TailwindIcon} alt="Tailwind" className="h-6 w-6" />,
    // Ajoute d'autres icônes ici
  }

  return (
    <div className="flex justify-end ">
      <ul className="flex gap-2 rounded-lg bg-light-color text-center  dark:bg-dark-color p-2 text-sm md:text-base w-max">
        {tagsContent.map((tag) => (
          <li className="" key={tag}>
            {iconsMap[tag] || tag}
          </li>
        ))}
      </ul>
    </div>
  )
}
