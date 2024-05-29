import puce from '../src/fleche.png'
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
              className="w-full h-full object-fit"
              id={index}
              src={picture}
              alt={`vue du logement : ${index}`}
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
      {pictures.length > 1 ? (
        <div>
          <div className="flex justify-between absolute w-full px-2 bottom-1/2">
            <button
              className="font-bold text-3xl text-main-color hover:scale-110"
              onClick={PrevPicture}
            >
              <Image
                className="rotate-180"
                src={puce}
                alt="flèche droite"
                width={30}
                height={30}
              />
            </button>
            <button
              className="font-bold text-3xl text-main-color hover:scale-110"
              onClick={NextPicture}
            >
              <Image src={puce} alt="flèche droite" width={30} height={30} />
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
