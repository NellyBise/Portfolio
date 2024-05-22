import mail from '../../src/mail.png'
import linkedin from '../../src/linkedin.png'
import github from '../../src/github.png'
import Image from 'next/image'

function Footer() {
  return (
    <footer className="bg-light-color">
      <div className="max-w-7xl m-auto flex justify-between items-center h-24 pl-2 pr-2">
        <p>Réalisé par Nelly Bise </p>
        <div className="flex gap-4">
          <a href="mailto:nelly.bise@free.fr">
            <Image src={mail} alt="lien vers GitHub" width={40} />
          </a>
          <a href="https://github.com/NellyBise" target="_blank">
            <Image src={github} alt="lien vers GitHub" width={40} />
          </a>
          <a href="https://www.linkedin.com/in/nelly-bise/" target="_blank">
            <Image src={linkedin} alt="lien vers GitHub" width={40} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
