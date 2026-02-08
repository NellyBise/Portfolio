'use client'

export default function Form() {
  return (
    <section className="flex flex-col items-center py-12 md:py-24" id="contact">
      <h2 className="text-3xl mt-2 mb-10 text-center dark:text-secondary-color">
        Contactez-moi
      </h2>
      <div className="px-6 text-base text-center">
        <p className="mb-4">
          Pour toute question ou collaboration, n'hésitez pas à me contacter :
        </p>
        <p>
          Mail :{' '}
          <a
            className="font-bold underline pointer-events-auto dark:text-secondary-color  duration-300 hover:text-main-color"
            href="mailto:nellybise@free.fr"
            aria-label="cliquer pour envoyer un email"
          >
            nellybise@free.fr
          </a>
        </p>
        <p>
          Téléphone :{' '}
          <a
            className=" font-bold underline pointer-events-auto dark:text-secondary-color duration-300 hover:text-main-color"
            href="tel:0620143013"
            aria-label="cliquer pour appeler"
          >
            06 20 14 30 13
          </a>
        </p>
        <p className="mt-4">Je réponds généralement sous 48h.</p>
      </div>
    </section>
  )
}
