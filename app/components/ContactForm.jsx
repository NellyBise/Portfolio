'use client'

import { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const variants = {
  visible: { y: 0, opacity: 1, filter: 'blur(0px)' },
  hidden: { y: 50, opacity: 0, filter: 'blur(5px)' },
}

export default function Form() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const [isOpen, setIsOpen] = useState(false)
  function toggle() {
    setIsOpen(!isOpen)
  }

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
      setErrorMessage('Votre message a bien été envoyé')
      console.log('Success')
    } catch (error) {
      setErrorMessage("Erreur : votre message n'a pas pu être envoyé")
      console.error('Error:', error)
    }
  }

  return (
    <motion.section
      variants={variants}
      ref={ref}
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center py-12 md:py-24"
      id="contact"
    >
      <h2 className="text-4xl mt-2 mb-10 text-center dark:text-secondary-color">
        Contactez-moi
      </h2>
      <p className="px-6 text-base md:text-lg text-center">
        Vous pouvez utiliser le formulaire, m&rsquo;envoyer directement un mail
        à{' '}
        <a
          className="text-main-color underline pointer-events-auto dark:text-secondary-color  duration-300 hover:font-bold"
          href="mailto:nellybise@free.fr"
          aria-label="cliquer pour envoyer un email"
        >
          nellybise@free.fr
        </a>{' '}
        ou m&rsquo;appeler{' '}
        <button
          className="text-main-color underline pointer-events-auto dark:text-secondary-color  duration-300 hover:font-bold"
          onClick={toggle}
          aria-label="cliquer pour afficher mon numéro de téléphone"
          rel="nofollow"
        >
          {isOpen ? '06 20 14 30 13' : 'en cliquant ici'}
        </button>
      </p>
      <form
        className="mt-8 flex flex-col w-full px-6 max-w-[700px]"
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
          className="w-1/3 self-end pointer-events-auto border-[1px] border-secondary-color text-center pointer-events-auto hover:drop-shadow-none  rounded-3xl bg-secondary-color my-12 md:mt-20 px-6 py-2 text-s md:text-lg dark:text-black drop-shadow-lg duration-500 hover:shadow-def disabled:bg-light-color disabled:cursor-not-allowed disabled:border-light-color disabled:transform-none disabled:hover:drop-shadow-lg disabled:hover:shadow-none"
        >
          Envoyer
        </button>
        {errorMessage && (
          <p className="text-center font-bold" id="connexionMessage">
            {errorMessage}
          </p>
        )}
      </form>
    </motion.section>
  )
}
