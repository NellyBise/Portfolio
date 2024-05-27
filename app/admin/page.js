'use client'

import { useEffect, useState } from 'react'
import Header from '../components/Header'
import AddProjectForm from '../components/AddProjectForm'
import Footer from '../components/Footer'

export default function Admin() {
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
