export default function Outils() {
  return (
    <div>
      <h1 className="text-4xl md:pt-20 mb-10 text-center dark:text-secondary-color">
        Notices de poste à partir de Seirich
      </h1>
      <div className="text-left p-4 md:p-10">
        <p>
          Lorsque plusieurs produits chimiques sont utilisés sur un même poste
          de travail, créer une notice de poste peut être fastidieux.
        </p>
        <p>
          Cet outil exploite votre inventaire{' '}
          <a
            className="font-bold underline pointer-events-auto dark:text-secondary-color duration-300 hover:text-main-color"
            href="https://www.seirich.fr/seirich-web/index.xhtml"
          >
            Seirich
          </a>{' '}
          (export Excel) pour pré-remplir automatiquement une notice de poste
          avec les produits, pictogrammes et mentions de danger. Vous n'avez
          plus qu'à compléter avec les autres risques du poste, les EPI
          obligatoires et les consignes d'urgence puis imprimer directement.
        </p>
        <p className="mt-4">
          ⚠️ Outil en phase de test — vos retours sont précieux :{' '}
          <a
            className="font-bold underline pointer-events-auto dark:text-secondary-color  duration-300 hover:text-main-color"
            href="mailto:nellybise@free.fr"
            aria-label="cliquer pour envoyer un email"
          >
            nellybise@free.fr
          </a>
        </p>
      </div>
      <div className="flex flex-col gap-4 mb-12 p-4 md:p-0 md:flex-row flex-wrap py-4 justify-center">
        <iframe
          src="/outils/notices-poste.html"
          style={{ width: '100%', height: '1300px', border: 'none' }}
        />
      </div>
    </div>
  )
}
