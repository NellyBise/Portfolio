'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import AddProjectForm from '../components/AddProjectForm'
import Footer from '../components/Footer'

export default function Admin() {
  /*const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const checkAuthentication = async () => {
      const isAuthenticated = await isAuthenticated()
      setIsAuthenticated(isAuthenticated)
    }
    checkAuthentication()
  }, [])

  if (!isAuthenticated) {
    // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
    router.push('/login')
    return null
  }*/

  return (
    <>
      <Header />
      <main>
        <AddProjectForm />
      </main>
      <Footer />
    </>
  )
}
