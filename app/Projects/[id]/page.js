'use client'

import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Project from '@/app/components/Project'

import { useParams } from 'next/navigation'

import projectsAll from '../../data/projects.json'

export default function ProjectPage() {
  const { id } = useParams()

  const projectSelected = projectsAll?.find((project) => project._id === id)

  return (
    <>
    <Header />
      <Project project={projectSelected} />
      <Footer />
    </>
  )
}
