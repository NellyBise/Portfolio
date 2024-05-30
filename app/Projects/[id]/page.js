'use client'

import Footer from '@/app/components/Footer'
import Project from '@/app/components/Project'
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function ProjectPage() {
  const { id } = useParams()
  const [projects, setProject] = useState(null)

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/api'
    fetch(`${apiUrl}/projects`, {
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
      })
      .catch((err) => {
        console.error(err)
      })
  }, [id])

  const projectSelected = projects?.find((project) => project._id === id)

  return (
    <>
      <Project project={projectSelected} />
      <Footer />
    </>
  )
}
