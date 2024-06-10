'use client'

import { useEffect, useState } from 'react'

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }
  const [errorMessage, setErrorMessage] = useState('')

  const [isDisabled, setIsDisabled] = useState(true)
  useEffect(() => {
    const checkValues = () => {
      if (
        formData.name.length > 3 &&
        formData.email.length > 3 &&
        formData.message.length > 10
      ) {
        setIsDisabled(false)
      } else {
        setIsDisabled(true)
      }
    }
    checkValues()
  }, [formData.message, formData.name, formData.email])

  const handleSubmit = async (event) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    event.preventDefault()
    setErrorMessage('')
    try {
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message)
      }
      setFormData({
        name: '',
        email: '',
        message: '',
      })
      console.log('Success')
    } catch (error) {
      setErrorMessage('Identifiants non valides')
      console.error('Error:', error)
    }
  }

  return (
    <section className="flex flex-col items-center py-12 md:py-24" id="contact">
      <h2 className="text-4xl mt-2 mb-10 text-center text-main-color dark:text-secondary-color">
        CONTACTEZ-MOI
      </h2>
      <form
        className="mt-8 flex flex-col w-full px-6 md:w-2/5"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Votre nom</label>
        <input
          className="p-2 drop-shadow-lg bg-light-color dark:bg-dark-color rounded"
          id="name"
          required
          autoComplete="name"
          maxLength={80}
          name="name"
          type="text"
          value={formData.name || ''}
          onChange={handleChange}
        ></input>
        <label className="mt-8" htmlFor="email">
          Votre adresse email
        </label>
        <input
          className="p-2 drop-shadow-lg bg-light-color dark:bg-dark-color rounded"
          id="email"
          required
          autoComplete="email"
          maxLength={80}
          name="email"
          type="email"
          value={formData.email || ''}
          onChange={handleChange}
        ></input>
        <label className="mt-8" htmlFor="message">
          Votre message
        </label>
        <textarea
          className="h-36 p-2 drop-shadow-lg bg-light-color dark:bg-dark-color rounded"
          id="message"
          required
          name="message"
          value={formData.message || ''}
          onChange={handleChange}
        ></textarea>
        <button
          disabled={isDisabled}
          className="w-1/3 self-end pointer-events-auto rounded-3xl bg-secondary-color my-6 md:my-12 px-3 py-1 sm:text-xs md:text-lg dark:text-black drop-shadow-lg duration-300 hover:bg-secondary-color/50 disabled:bg-light-color disabled:cursor-not-allowed"
        >
          Envoyer
        </button>
        {errorMessage && (
          <p className="text-center font-bold" id="connexionMessage">
            {errorMessage}
          </p>
        )}
      </form>
    </section>
  )
}
