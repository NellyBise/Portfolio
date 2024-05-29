'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

function AddProjectForm() {
  const router = useRouter()
  const apiUrl = 'http://localhost:3000/api'
  const [formData, setFormData] = useState({})

  const handleLogout = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch(`${apiUrl}/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'logout',
        }),
        credentials: 'include',
      })
      if (!response.ok) {
        throw new Error('Failed to logout')
      }
      router.push('/login')
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleChange = (event) => {
    const { name, value, type } = event.target
    if (type === 'file') {
      setFormData((prevState) => ({
        ...prevState,
        [name]:
          name === 'img' ? [...event.target.files] : event.target.files[0],
      }))
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData()
    form.append('name', formData.name)
    form.append('mission', formData.mission)
    form.append('techno', formData.techno)
    form.append('link', formData.link)
    form.append('github', formData.github)
    form.append('cover', formData.cover)
    for (let i = 0; i < formData.img.length; i++) {
      form.append('img', formData.img[i])
    }

    const response = await fetch('/api/projects', {
      method: 'POST',
      body: form,
    })
    if (response.ok) {
      console.log('projet ajouté')
    } else {
      console.log('erreur: projet non ajouté')
    }
  }

  return (
    <section className="flex flex-col items-center py-12 md:py-24" id="contact">
      <button
        className="w-max  pointer-events-auto rounded-3xl bg-secondary-color my-6 md:my-12 px-3 py-1 sm:text-xs md:text-lg dark:text-main-color dark:font-bold drop-shadow-lg duration-500 hover:bg-main-color hover:text-white dark:hover:text-white"
        onClick={handleLogout}
      >
        {' '}
        se déconnecter{' '}
      </button>
      <h2 className="text-4xl mt-2 mb-10 text-center text-main-color dark:text-secondary-color">
        AJOUTER UN NOUVEAU PROJET
      </h2>
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col w-full px-6 gap-2 md:w-2/5"
      >
        <label htmlFor="name">Nom du projet</label>
        <input
          className="p-2 drop-shadow-lg bg-light-color dark:bg-dark-color rounded"
          id="name"
          type="text"
          value={formData.name || ''}
          name="name"
          onChange={handleChange}
        ></input>
        <label htmlFor="mission">Description</label>
        <textarea
          className="p-2 drop-shadow-lg bg-light-color dark:bg-dark-color rounded"
          id="mission"
          type="text"
          value={formData.mission || ''}
          name="mission"
          placeholder="description de la mission"
          onChange={handleChange}
        ></textarea>
        <label htmlFor="techno">Technologies</label>
        <input
          className="p-2 drop-shadow-lg bg-light-color dark:bg-dark-color rounded"
          id="techno"
          type="text"
          value={formData.techno || ''}
          name="techno"
          placeholder="techno séparées par des virgules sans espaces"
          onChange={handleChange}
        ></input>
        <label htmlFor="link">Lien vers le site</label>
        <input
          className="p-2 drop-shadow-lg bg-light-color dark:bg-dark-color rounded"
          id="link"
          type="url"
          value={formData.link || ''}
          name="link"
          onChange={handleChange}
        ></input>
        <label htmlFor="github">Lien GitHub</label>
        <input
          className="p-2 drop-shadow-lg bg-light-color dark:bg-dark-color rounded"
          id="github"
          type="url"
          value={formData.github || ''}
          name="github"
          onChange={handleChange}
        ></input>
        <label htmlFor="cover">Image de couverture</label>
        <input
          className="p-2 drop-shadow-lg bg-light-color dark:bg-dark-color rounded"
          id="cover"
          type="file"
          name="cover"
          onChange={handleChange}
        ></input>
        <label htmlFor="img">Images du projet</label>
        <input
          className="p-2 drop-shadow-lg bg-light-color dark:bg-dark-color rounded"
          id="img"
          type="file"
          multiple
          name="img"
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

export default AddProjectForm
