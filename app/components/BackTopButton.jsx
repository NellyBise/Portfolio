'use client'

import { useState, useEffect } from 'react'

export default function BackTop() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={handleTop}
      data-twe-ripple-init
      data-twe-ripple-color="light"
      className={`!fixed md:bottom-5 md:end-5 rounded-full bg-grey p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-main-color dark:hover:bg-secondary-color hover:shadow-lg focus:bg-main-color dark:focus:bg-secondary-color focus:shadow-lg focus:outline-none focus:ring-0 ${
        showButton ? '' : 'hidden'
      }`}
    >
      <span className="[&>svg]:w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </span>
    </button>
  )
}
