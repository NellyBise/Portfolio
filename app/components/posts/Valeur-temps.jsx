import Calculator from './Calculator'

export default function ValeurTemps() {
  return (
    <article className="flex flex-col gap-2">
      <h2 className="text-3xl mt-14 mb-6 text-main-color dark:text-secondary-color">
        Pourquoi calculer la valeur de son temps ?
      </h2>

      <p>
        Mais qu’est-ce que la valeur de son temps et pourquoi l’évaluer ? Ici,
        nous parlons de sa valeur financière.
      </p>
      <p>
        Jusqu’à récemment, je n’avais jamais pensé à la mesurer. Puis, j’ai
        découvert une méthode d’évaluation que j’ai testée sans trop savoir à
        quoi m’attendre… et j’ai finalement pris conscience de son importance,
        tant sur le plan professionnel que personnel.
      </p>
      <p>Je vous laisse en juger par vous même.</p>

      <h2 className="text-3xl mt-14 mb-6 text-main-color dark:text-secondary-color">
        Une méthode simple en 4 étapes
      </h2>
      <p>
        Évaluer la valeur de son temps, ce n’est pas seulement diviser son
        revenu par le nombre d’heures travaillées. Cette approche peut donner
        une première idée mais elle peut être biaisée : vous pouvez par exemple
        débuter une nouvelle activité ou encore être en transition
        professionnelle. Ce n’est donc pas ce calcul qui nous intéresse
        aujourd’hui.{' '}
      </p>
      <p>
        La méthode proposée est inspirée du livre{' '}
        <span className="italic">Votre temps est infini</span> de Fabien
        Olicard, qui lui-même s’appuie sur une formation Google. Elle repose sur
        quatre questions simples. Une fois répondu, vous obtiendrez une
        estimation de la valeur de votre temps ainsi qu’une interprétation de
        vos résultats.
      </p>

      <h3 className="text-2xl mt-6 mb-2 text-main-color dark:text-secondary-color">
        1. L’attente récompensée : combien vaut votre patience ?
      </h3>
      <p>
        Vous pouvez bénéficier d’une carte cadeau mais vous devez faire la queue
        pendant une heure pour l’obtenir. Pendant cette heure vous ne pouvez
        rien faire d’autre qu’attendre. Quel serait le montant de cette carte
        qui serait acceptable pour que vous patientez ?
      </p>
      <h3 className="text-2xl mt-6 mb-2 text-main-color dark:text-secondary-color">
        2. Une tâche répétitive : combien êtes-vous prêt à payer pour déléguer ?
      </h3>
      <p>
        Vous devez absolument effectuer une tâche très simple et très répétitive
        pendant une heure. Cette tâche ne vous apporte aucun avantage mais elle
        est impérative. Combien serez-vous prêt à payer quelqu’un pour qu’il
        l’effectue à votre place ?
      </p>
      <h3 className="text-2xl mt-6 mb-2 text-main-color dark:text-secondary-color">
        3. Vos revenus réels et votre temps de travail
      </h3>
      <p>
        Prenez l’ensemble de vos revenus professionnels et divisez le par votre
        temps effectif de travail plus le temps passé dans les transports. Si
        vos revenus ou votre temps de travail plus transport ne sont pas
        stables, faites une moyenne sur une année par exemple.
      </p>
      <h3 className="text-2xl mt-6 mb-2 text-main-color dark:text-secondary-color">
        4. Votre objectif de rémunération idéale
      </h3>
      <p>
        Il s’agit maintenant d’estimer combien vous souhaiteriez gagner par
        heure pour être satisfait. Attention à rester réaliste pour que
        l’exercice garde tout son sens.
      </p>
      <p>Prêt ? Entrez vos réponses :</p>
      <Calculator />
      <h2 className="text-3xl mt-14 mb-6 text-main-color dark:text-secondary-color">
        Une méthode simple en 4 étapes
      </h2>
      <p>
        Évaluer la valeur de son temps, c’est avant tout savoir mieux le gérer
        et choisir comment l’investir. Maintenant que vous avez fait cet
        exercice, prenez le temps de confronter cette valeur aux tâches à
        accomplir. Pour ma part, cette évaluation m’a permis de réagir et
        aujourd’hui, je me permets plus souvent de déléguer certaines tâches.
      </p>
      <p>
        Et surtout, gardez en tête que cette évaluation n’est pas figée.{' '}
        <span className="font-bold">
          N’hésitez pas à vous réévaluer de temps en temps pour ajuster vos
          priorités.
        </span>
      </p>
    </article>
  )
}
