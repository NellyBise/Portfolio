export default function Strategie() {
  return (
    <article className="flex flex-col gap-2">
      <h2 className="text-3xl mt-14 mb-6 text-main-color dark:text-secondary-color">
        1. SEO On-Page : Optimisation du Contenu
      </h2>

      <p>
        Le SEO on-page concerne l’optimisation du contenu et des balises HTML
        afin de répondre aux intentions de recherche des internautes et
        d’améliorer la pertinence des pages aux yeux des moteurs de recherche.
      </p>

      <h3 className="text-2xl mt-6 mb-2 text-main-color dark:text-secondary-color">
        Mots-clés et Intention de Recherche
      </h3>
      <ul className="list-disc list-inside flex flex-col gap-1">
        <li>
          Analyse des mots-clés : Identifiez des mots-clés pertinents selon leur
          volume de recherche, leur concurrence et leur adéquation avec votre
          audience.
        </li>

        <li>
          Compréhension des intentions de recherche : Différenciez les
          intentions navigationnelles, informationnelles, commerciales et
          transactionnelles.
        </li>

        <li>
          Structuration efficace : Appliquez la règle d’or : 1 page = 1
          intention de recherche pour maximiser la clarté et la pertinence.
        </li>
      </ul>
      <h3 className="text-2xl mt-6 mb-2 text-main-color dark:text-secondary-color">
        Optimisation des Pages
      </h3>
      <ul className="list-disc list-inside flex flex-col gap-1">
        <li>
          Titres et méta descriptions : Rédigez des titres accrocheurs contenant
          les mots-clés principaux et des méta descriptions incitant au clic.
        </li>

        <li>
          Balises hn : Utilisez h1 pour l’intention principale, et h2, h3 pour
          structurer les sous-intentions.
        </li>

        <li>
          Contenu de qualité : Rédigez des textes informatifs et engageants en
          intégrant des mots-clés naturellement et en répondant aux attentes des
          internautes.
        </li>

        <li>
          Maillage interne : Reliez stratégiquement vos pages entre elles pour
          une navigation fluide et logique.
        </li>
      </ul>

      <h2 className="text-3xl mt-14 mb-6 text-main-color dark:text-secondary-color">
        2. SEO Technique : Faciliter l’Indexation
      </h2>
      <p>
        Le SEO technique vise à optimiser la structure et les performances de
        votre site pour garantir une meilleure indexation par Google.
      </p>

      <h3 className="text-2xl mt-6 mb-2 text-main-color dark:text-secondary-color">
        Facteurs Clés d’Optimisation
      </h3>
      <ul className="list-disc list-inside flex flex-col gap-1">
        <li>
          Crawl et indexation : Vérifiez régulièrement l’état de l’indexation de
          vos pages via <span className="italic">Google Search Console</span>.
        </li>

        <li>
          Sitemap.xml et robots.txt : Assurez-vous que Google explore
          correctement votre site.
        </li>

        <li>
          Ergonomie mobile : Il est indispensable que votre site soit{' '}
          <span className="italic">mobile-friendly</span>.
        </li>

        <li>
          Temps de chargement : Améliorez la vitesse du site en optimisant les
          images, en utilisant un CDN et en minimisant le code inutile.
        </li>
        <li>
          Sécurisation du site : Activez le HTTPS et surveillez les erreurs de
          sécurité.
        </li>
        <li>
          Maillage interne et pagination : Évitez les pages orphelines et
          structurez efficacement vos liens.
        </li>

        <li>
          Données structurées : Intégrez des{' '}
          <span className="italic">rich snippets</span> pour enrichir
          l’affichage de vos résultats dans les moteurs de recherche.
        </li>
      </ul>
      <h2 className="text-3xl mt-14 mb-6 text-main-color dark:text-secondary-color">
        3. SEO Off-Page : Renforcer l’Autorité du Site
      </h2>

      <p>
        Le SEO off-page repose sur la création de backlinks (liens entrants) et
        le renforcement de la notoriété du site pour améliorer son classement
        dans les résultats de recherche.
      </p>

      <h3 className="text-2xl mt-6 mb-2 text-main-color dark:text-secondary-color">
        Stratégies de Netlinking
      </h3>
      <ul className="list-disc list-inside flex flex-col gap-1">
        <li>
          Acquisition de backlinks de qualité : Privilégiez des liens en
          provenance de sites fiables et pertinents dans votre domaine.
        </li>

        <li>
          Diversification des sources : Obtenez des liens via des blogs, forums,
          annuaires spécialisés et collaborations avec des sites partenaires.
        </li>

        <li>
          Utilisation des réseaux sociaux : Même s’ils ne sont pas un facteur
          direct de classement, ils participent à la visibilité et à la
          notoriété de votre contenu.
        </li>

        <li>
          Relations presse et guest blogging : Rédigez des articles pour des
          sites d’autorité afin d’améliorer votre crédibilité.
        </li>
      </ul>
      <h3 className="text-2xl mt-6 mb-2 text-main-color dark:text-secondary-color">
        Précautions à Prendre
      </h3>
      <ul className="list-disc list-inside flex flex-col gap-1">
        <li>
          Évitez les backlinks artificiels : Une acquisition trop rapide de
          liens peut entraîner des pénalités de la part de Google.
        </li>

        <li>
          Optimisation des ancres de lien : Alternez entre ancres exactes (pas
          plus de 5 à 7%), génériques et partiellement optimisées pour un profil
          de liens naturel.
        </li>

        <li>
          Répartition stratégique des liens : Environ 70 % des backlinks doivent
          pointer vers la page d’accueil et 30 % vers des pages internes.
        </li>
      </ul>
      <h2 className="text-3xl mt-14 mb-6 text-main-color dark:text-secondary-color">
        4. Suivi et Amélioration Continue
      </h2>

      <p>
        Le SEO est un travail de longue haleine. Il est crucial de suivre ses
        performances et d’ajuster sa stratégie.
      </p>

      <h3 className="text-2xl mt-6 mb-2 text-main-color dark:text-secondary-color">
        Outils Indispensables
      </h3>
      <ul className="list-disc list-inside flex flex-col gap-1">
        <li>
          Google Analytics : Suivi du trafic, des sources de visite et du
          comportement des utilisateurs.
        </li>

        <li>
          Google Search Console : Analyse de l’indexation, détection des erreurs
          techniques et suivi des performances des mots-clés.
        </li>

        <li>
          Outils d’audit SEO (
          <span className="italic">SEMRush, Ahrefs, Screaming Frog...</span>) :
          Analyse approfondie du référencement, des backlinks et des
          opportunités d’optimisation.
        </li>
      </ul>

      <h3 className="text-2xl mt-6 mb-2 text-main-color dark:text-secondary-color">
        Roadmap SEO Type
      </h3>
      <ul className="list-disc list-inside flex flex-col gap-1">
        <li>Audit SEO (1 à 4 jours)</li>

        <li>Recherche de mots-clés (0,5 à 2 jours)</li>

        <li>
          Optimisation du site (2h par page pour le contenu, plus pour les
          corrections techniques)
        </li>

        <li>Création de contenu (0,5 à 1 jour par article)</li>

        <li>
          Netlinking et partenariats (2 à 5 jours, à répéter régulièrement)
        </li>

        <li>Reporting et ajustements (1 à 2 jours)</li>
      </ul>
      <h2 className="text-3xl mt-14 mb-6 text-main-color dark:text-secondary-color">
        Conclusion
      </h2>

      <p>
        Le SEO est un levier puissant pour accroître la visibilité et la
        notoriété d’un site web. En adoptant une approche méthodique et en
        suivant les bonnes pratiques, vous maximiserez vos chances d’atteindre
        les premières positions sur Google.
      </p>
      <p className="font-bold">
        Testez, analysez et ajustez votre stratégie en fonction des résultats
        obtenus.
      </p>
    </article>
  )
}
