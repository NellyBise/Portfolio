import { useState, useEffect } from 'react'

export default function Calculator() {
  const [values, setValues] = useState(['', '', '', ''])
  const names = [
    'La carte cadeau',
    'Déléguer une tâche',
    'Revenus réels',
    'Rémunération idéale',
  ]
  const [result, setResult] = useState(null)
  const [interpretation, setInterpretation] = useState([])

  const handleChange = (index, value) => {
    if (/^\d*\.?\d{0,2}$/.test(value)) {
      const newValues = [...values]
      newValues[index] = value
      setValues(newValues)
    }
  }

  const calculateAverage = () => {
    const numValues = values.map((v) => parseFloat(v) || 0)
    const average = (numValues.reduce((a, b) => a + b, 0) / 4).toFixed(2)
    setResult(average)
    evaluateCases(numValues)
  }

  const [isDisabled, setIsDisabled] = useState(true)
  useEffect(() => {
    setIsDisabled(!values.every((val) => val > 0 && val !== ''))
  }, [values])

  const evaluateCases = ([v1, v2, v3, result]) => {
    let interpretations = []

    if (result < v1)
      interpretations.push(
        '👉 Votre temps vaut plus qu’une carte cadeau. Prenez du recul pour mieux l’allouer.'
      )
    if (result > v1)
      interpretations.push(
        '👉 Votre temps vaut moins qu’une carte cadeau, vous avez conscience de vos priorités. Si l’écart est grand, gardez des objectifs réalistes.'
      )
    if (result > v2)
      interpretations.push(
        '👉 Votre temps vaut plus que ce que vous seriez prêt à payer pour déléguer une tâche répétitive. Pensez à déléguer ce qui n’a pas de valeur ajoutée pour vous.'
      )
    if (result < v2)
      interpretations.push(
        '👉 Votre temps vaut moins que ce que vous seriez prêt à payer pour déléguer. Ne déléguez pas trop vite, certaines tâches peuvent être faites par vous-même.'
      )
    if (result > v3)
      interpretations.push(
        '👉 Votre temps vaut plus que vos revenus, signe que vous visez plus haut. Une bonne gestion du temps vous aidera à y parvenir.'
      )
    if (result < v3)
      interpretations.push(
        '👉 Votre temps vaut moins que vos revenus. Prenez le temps de repenser vos ambitions et renforcez votre confiance en vous.'
      )

    setInterpretation(interpretations)
  }

  return (
    <div className="flex flex-col max-w-md md:max-w-[800px] md:w-[800px] mx-auto mt-4 p-4 bg-white dark:bg-dark-color shadow-cardshadow shadow-black/10 dark:shadow-white/20 rounded-lg">
      <h4 className="text-xl font-bold mb-4">Évaluation des valeurs</h4>
      <div className="space-y-4">
        {values.map((val, index) => (
          <form key={index}>
            <label for={val}>{names[index]}</label>
            <input
              type="text"
              name={val}
              value={val}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder={`Valeur ${index + 1}`}
              className="w-full mt-1 p-2 rounded-md bg-light-color dark:bg-black"
            />
          </form>
        ))}
      </div>
      <button
        disabled={isDisabled}
        className="self-center pointer-events-auto border-[1px] border-secondary-color text-center pointer-events-auto  hover:drop-shadow-none rounded-3xl bg-secondary-color my-4 md:mt-8 px-6 py-2 text-s md:text-lg dark:text-black drop-shadow-lg duration-500 hover:shadow-def disabled:bg-light-color disabled:cursor-not-allowed disabled:border-light-color disabled:transform-none disabled:hover:drop-shadow-lg disabled:hover:shadow-none"
        onClick={calculateAverage}
      >
        Calculer
      </button>

      {result !== null && (
        <div className="mt-4 p-3 bg-gray-100 rounded-md">
          <p className="font-semibold mb-6 text-lg">
            Valeur moyenne de votre temps : {result} €
          </p>
          <ul className="mt-2 gap-4">
            {interpretation.length > 0
              ? interpretation.map((msg, i) => (
                  <li key={i} className="mb-2">
                    {msg}
                  </li>
                ))
              : 'Aucune condition spécifique détectée.'}
          </ul>
        </div>
      )}
    </div>
  )
}
