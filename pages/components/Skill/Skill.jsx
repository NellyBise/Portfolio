import Image from 'next/image'

export function Skill({ image, name }) {
  return (
    <div className="flex flex-col items-center">
      <Image
        className="flex items-center h-14 w-auto p-2 mx-2"
        src={image}
        alt={name}
        height={40}
        width={40}
      />
      <p className="mb-6">{name}</p>
    </div>
  )
}
