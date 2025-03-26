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
            aria-label="envoyer un mail"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="37"
              viewBox="0 0 16 16"
              className="transition-colors duration-200 dark:fill-white fill-black hover:fill-main-color dark:hover:fill-secondary-color"
            >
              <path d="M13.333 0H2.667A2.675 2.675 0 0 0 0 2.667v10.666C0 14.8 1.2 16 2.667 16h10.666C14.801 16 16 14.8 16 13.333V2.667A2.674 2.674 0 0 0 13.333 0M4 4h8q.216.001.409.088L8 9.231L3.591 4.088A1 1 0 0 1 4 4m-1 7V5l.002-.063l2.932 3.421l-2.9 2.9A1 1 0 0 1 3 11m9 1H4q-.133 0-.258-.034L6.588 9.12l1.413 1.648L9.414 9.12l2.846 2.846a1 1 0 0 1-.258.034zm1-1q0 .133-.034.258l-2.9-2.9l2.932-3.421L13 5z" />
            </svg>
          </a>
          <a
            className="h-8 md:h-12 flex items-center"
            href="https://github.com/NellyBise"
            aria-label="lien vers GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 24 24"
              className="transition-colors duration-200 dark:fill-white fill-black hover:fill-main-color dark:hover:fill-secondary-color"
            >
              <path d="M11.963 2.382C.554 2.621-1.82 17.93 8.852 21.602c.498.093.684-.219.684-.478v-1.68c-2.79.601-3.38-1.317-3.38-1.317a2.6 2.6 0 0 0-1.121-1.442c-.902-.612.072-.602.072-.602a2.07 2.07 0 0 1 1.536 1.038a2.167 2.167 0 0 0 2.924.819c.052-.5.275-.965.633-1.317c-2.23-.25-4.564-1.1-4.564-4.875a3.76 3.76 0 0 1 1.038-2.645a3.46 3.46 0 0 1 .103-2.634s.84-.26 2.76 1.037a9.6 9.6 0 0 1 5.02 0c1.908-1.276 2.748-1.038 2.748-1.038c.365.828.398 1.763.093 2.614a3.75 3.75 0 0 1 1.037 2.645c0 3.786-2.344 4.626-4.574 4.865c1.038.55.602 4.086.664 4.522c0 .259.176.57.695.477c10.642-3.64 8.152-18.97-3.257-19.209" />
            </svg>
          </a>
          <a
            className="h-8 md:h-12 flex items-center"
            href="https://www.linkedin.com/in/nelly-bise/"
            aria-label="lien vers LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 24 24"
              className="transition-colors duration-200 dark:fill-white fill-black hover:fill-main-color dark:hover:fill-secondary-color"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
            </svg>
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
