'use client'

import Footer from '@/app/components/Footer'
import Project from '@/app/components/Project'
import { Loader } from '@/app/components/Loader'
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function ProjectPage() {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    fetch(`${apiUrl}/getOneProject?id=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch project: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        setProject(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <>
      <Project project={project} />
      <Footer />
    </>
  )
}
