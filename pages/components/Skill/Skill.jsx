import Image from 'next/image'

export function Skill({ image, name }) {
  return (
    <div className="flex flex-col items-center">
      <Image
        className="flex items-center h-16 w-auto p-2"
        src={image}
        alt={name}
        height={50}
        width={50}
      />
      <p>{name}</p>
    </div>
  )
}
