import React from 'react'

export const metadata = {
  title: 'Mentions légales - Nelly Bise',
  robots: {
    index: false,
    follow: false,
  },
}

export default function MentionsLegales() {
  return (
    <div className="container flex flex-col gap-6 mx-auto pt-24 px-4 py-12">
      <h1 className="text-4xl mt-2 mb-10 text-center text-main-color uppercase dark:text-secondary-color">
        Mentions Légales
      </h1>

      <div className="prose lg:prose-xl">
        <h2 className="text-2xl text-main-color dark:text-secondary-color pb-2">
          1. Informations légales
        </h2>
        <p>
          Le présent site est édité par : <strong>Nelly Bise</strong>
        </p>
        <p>
          Adresse :{' '}
          <strong>
            4 rue des cerisiers - 66410 Villelongue de la Salanque
          </strong>
        </p>
        <p>
          E-mail : <strong>nellybise@free.fr</strong>
        </p>
        <p>
          Responsable de la publication : <strong>Nelly Bise</strong>
        </p>
      </div>
      <div className="prose lg:prose-xl">
        <h2 className="text-2xl text-main-color dark:text-secondary-color pb-2">
          2. Hébergement
        </h2>
        <p>
          Le site est hébergé par : <strong>Vercel</strong>
        </p>
        <p>
          Adresse de l’hébergeur :{' '}
          <strong>340 S Lemon Ave #4133 Walnut, CA 91789 United States.</strong>
        </p>
      </div>
      <div className="prose lg:prose-xl">
        <h2 className="text-2xl text-main-color dark:text-secondary-color pb-2">
          3. Propriété intellectuelle
        </h2>
        <p>
          L’ensemble des contenus (textes, images, logos, vidéos, etc.) présents
          sur le site sont protégés par des droits d’auteur. Toute reproduction
          ou utilisation sans autorisation préalable est interdite.
        </p>
      </div>
      <div className="prose lg:prose-xl">
        <h2 className="text-2xl text-main-color dark:text-secondary-color pb-2">
          4. Collecte des données personnelles
        </h2>
        <p>
          Les données personnelles collectées sur ce site sont exclusivement
          utilisées pour la gestion des demandes via le formulaire de contact.
          Aucune donnée n’est transmise à des tiers.
        </p>
        <p>
          Conformément à la loi Informatique et Libertés, vous disposez d’un
          droit d’accès, de rectification et de suppression de vos données
          personnelles. Pour exercer ce droit, veuillez nous contacter à
          l’adresse suivante : <strong>nellybise@free.fr</strong>.
        </p>
      </div>
      <div className="prose lg:prose-xl">
        <h2 className="text-2xl text-main-color dark:text-secondary-color pb-2">
          5. Cookies
        </h2>
        <p>
          Ce site utilise des cookies pour améliorer l’expérience utilisateur.
          En poursuivant votre navigation, vous acceptez l’utilisation de
          cookies. Vous pouvez désactiver les cookies dans les paramètres de
          votre navigateur.
        </p>
      </div>
      <div className="prose lg:prose-xl">
        <h2 className="text-2xl text-main-color dark:text-secondary-color pb-2">
          6. Responsabilité
        </h2>
        <p>
          L’éditeur du site ne pourra être tenu responsable des erreurs ou
          omissions présentes sur le site. De même, il ne pourra être tenu
          responsable des dommages directs ou indirects résultant de
          l’utilisation du site.
        </p>
      </div>
    </div>
  )
}
