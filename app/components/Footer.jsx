import mail from '../src/mail.png'
import linkedin from '../src/linkedin.png'
import github from '../src/github.svg'
import mailDark from '../src/mail_dark.png'
import linkedinDark from '../src/linkedin_dark.png'
import githubDark from '../src/github-dark.svg'
import Image from 'next/image'

function Footer() {
  return (
    <footer className="bg-light-color dark:bg-dark-color py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-center md:text-left text-sm text-gray-500 dark:text-gray-400">
          Réalisé par Nelly Bise
        </p>

        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            className="h-8 md:h-12 flex items-center"
            href="mailto:nelly.bise@free.fr"
          >
            <Image
              className="block dark:hidden"
              src={mail}
              alt="envoyer un mail"
              width={40}
            />
            <Image
              className="hidden dark:block"
              src={mailDark}
              alt="envoyer un mail"
              width={40}
            />
          </a>
          <a
            className="h-8 md:h-12 flex items-center"
            href="https://github.com/NellyBise"
            target="_blank"
            rel="noopener noreferrer"
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
            className="h-8 md:h-12 flex items-center"
            href="https://www.linkedin.com/in/nelly-bise/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="block dark:hidden"
              src={linkedin}
              alt="lien vers LinkedIn"
              width={40}
            />
            <Image
              className="hidden dark:block"
              src={linkedinDark}
              alt="lien vers LinkedIn"
              width={40}
            />
          </a>
        </div>

        <div className="mt-4 md:mt-0">
          <a
            href="/mentions-legales"
            className="text-sm text-center text-gray-500 dark:text-gray-400 hover:underline"
          >
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
