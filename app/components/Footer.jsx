import mail from '../src/mail.png'
import linkedin from '../src/linkedin.png'
import github from '../src/github.png'
import mailDark from '../src/mail_dark.png'
import linkedinDark from '../src/linkedin_dark.png'
import githubDark from '../src/github_dark.png'
import Image from 'next/image'

function Footer() {
  return (
    <footer className="bg-light-color dark:bg-dark-color">
      <div className="max-w-7xl m-auto flex justify-between items-center h-24 pl-2 pr-2">
        <p>Réalisé par Nelly Bise </p>
        <div className="flex gap-4">
          <a className="w-8 md:w-12" href="mailto:nelly.bise@free.fr">
            <Image
              className="block dark:hidden"
              src={mail}
              alt="lien vers GitHub"
              width={40}
            />
            <Image
              className="hidden dark:block"
              src={mailDark}
              alt="lien vers GitHub"
              width={40}
            />
          </a>
          <a
            className="w-8 md:w-12"
            href="https://github.com/NellyBise"
            target="_blank"
          >
            <Image
              className="block dark:hidden"
              src={github}
              alt="lien vers GitHub"
              width={40}
            />
            <Image
              className="hidden dark:block"
              src={githubDark}
              alt="lien vers GitHub"
              width={40}
            />
          </a>
          <a
            className="w-8 md:w-12"
            href="https://www.linkedin.com/in/nelly-bise/"
            target="_blank"
          >
            <Image
              className="block dark:hidden"
              src={linkedin}
              alt="lien vers GitHub"
              width={40}
            />
            <Image
              className="hidden dark:block"
              src={linkedinDark}
              alt="lien vers GitHub"
              width={40}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
