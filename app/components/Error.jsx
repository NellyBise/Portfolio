import error from '../src/error.png'
import Image from 'next/image'

export default function Error() {
  return (
    <section>
      <div>
        <h2>Oups</h2>
        <h3>La page que vous cherchez semble introuvable</h3>
        <a href="/">Retourner à l&rsquo;accueil</a>
      </div>
      <figure>
        <Image src={error} alt="personne perdue" />
        <figcaption>
          <a href="https://storyset.com/travel">
            Travel illustrations by Storyset
          </a>
        </figcaption>
      </figure>
    </section>
  )
}
