'use client'

import puce from '../src/arrow.png'
import { useState } from 'react'
import Image from 'next/image'

function Slideshow({ pictures }) {
  const [clickedIndex, setClickedIndex] = useState(0)
  const NextPicture = () => {
    setClickedIndex((prevIndex) => (prevIndex + 1) % pictures.length)
  }
  const PrevPicture = () => {
    setClickedIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    )
  }
  const containerStyle = {
    transform: `translateX(-${clickedIndex * 100}%)`,
  }

  return (
    <article className="relative w-full h-auto drop-shadow-lg rounded-xl overflow-hidden">
      <div className="flex min-w-full duration-500" style={containerStyle}>
        {pictures.map((picture, index) => (
          <div className="min-w-full" key={index}>
            <Image
              className="w-full h-full aspect-auto object-fit"
              id={index}
              src={picture}
              alt=""
              width={20000}
              height={10000}
              quality={100}
            />
          </div>
        ))}
      </div>
      {pictures.length > 1 ? (
        <div>
          <div className="flex justify-between absolute w-full px-2 bottom-1/2">
            <button
              className="bg-grey/50 rounded-full w-8 h-8 flex justify-center items-center"
              onClick={PrevPicture}
              aria-hidden="true"
            >
              <Image
                className="rotate-180 "
                src={puce}
                alt=""
                width={10}
                height={10}
              />
            </button>

            <button
              className="bg-grey/50 rounded-full w-8 h-8 flex justify-center items-center"
              onClick={NextPicture}
              aria-hidden="true"
            >
              <Image src={puce} alt="" width={10} height={10} />
            </button>
          </div>
        </div>
      ) : (
        ''
      )}
    </article>
  )
}

export default Slideshow
