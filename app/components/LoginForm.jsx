'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

function LoginForm() {
  const router = useRouter()
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    action: 'login',
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
    event.preventDefault()
    try {
      const response = await fetch(`${apiUrl}/user`, {
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

      router.push('/admin')
      console.log('Success')
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <section className="flex flex-col items-center py-12 md:py-24" id="contact">
      <h2 className="text-4xl mt-2 mb-10 text-center text-main-color dark:text-secondary-color">
        SE CONNECTER
      </h2>
      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col w-full px-6 md:w-2/5"
      >
        <label htmlFor="email">Email</label>
        <input
          className="p-2 drop-shadow-lg bg-light-color dark:bg-dark-color rounded"
          id="email"
          required
          autoComplete="email"
          type="email"
          value={formData.email || ''}
          name="email"
          placeholder="email@mail.com"
          onChange={handleChange}
        ></input>
        <label className="mt-8" htmlFor="password">
          Mot de passe
        </label>
        <input
          className="p-2 drop-shadow-lg bg-light-color dark:bg-dark-color rounded"
          id="password"
          type="password"
          value={formData.password || ''}
          name="password"
          placeholder="password"
          autoComplete="current-password"
          onChange={handleChange}
        ></input>
        <button
          type="submit"
          className="w-1/3 self-end pointer-events-auto rounded-3xl bg-secondary-color my-6 md:my-12 px-3 py-1 sm:text-xs md:text-lg dark:text-main-color dark:font-bold drop-shadow-lg duration-500 hover:bg-main-color hover:text-white dark:hover:text-white"
        >
          Envoyer
        </button>
      </form>
    </section>
  )
}

export default LoginForm
