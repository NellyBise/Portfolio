'use client'

import { useState } from 'react'

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

  const handleSubmit = async (event) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    event.preventDefault()
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
      const errorDisplay = document.getElementById('responseMessage')
      if (errorDisplay) {
        errorDisplay.innerText = 'Votre message a bien été envoyé.'
      } else {
        console.error('Element with ID responseMessage not found.')
      }
      setFormData({
        name: '',
        email: '',
        message: '',
      })
      console.log('Success')
    } catch (error) {
      const errorDisplay = document.getElementById('responseMessage')
      if (errorDisplay) {
        errorDisplay.innerText =
          "Erreur : votre message n'a pas pu être envoyé."
      } else {
        console.error('Element with ID responseMessage not found.')
      }
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
          placeholder="John Doe"
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
          placeholder="jane-doe@email.com"
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
        <button className="w-1/3 self-end pointer-events-auto rounded-3xl bg-secondary-color my-6 md:my-12 px-3 py-1 sm:text-xs md:text-lg dark:text-main-color dark:font-bold drop-shadow-lg duration-500 hover:bg-main-color hover:text-white dark:hover:text-white">
          Envoyer
        </button>
        <p className="text-center font-bold" id="responseMessage"></p>
      </form>
    </section>
  )
}
