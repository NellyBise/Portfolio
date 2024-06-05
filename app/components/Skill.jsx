import Image from 'next/image'

function Skill({ image, name }) {
  return (
    <li className="flex flex-col items-center">
      <Image
        className="flex items-center h-14 w-auto p-2 mx-2"
        src={image}
        alt=""
        height={50}
        width={50}
      />
      <p id={name} className="mb-6">
        {name}
      </p>
    </li>
  )
}

export default Skill
