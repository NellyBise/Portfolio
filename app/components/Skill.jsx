import Image from 'next/image'

function Skill({ image, name }) {
  return (
    <li className="flex flex-col items-center">
      <Image
        className="flex items-center p-2 mx-2 size-12 md:size-16 lg:size-20"
        src={image}
        alt=""
        height={50}
        width={50}
      />
      <p className="text-base lg:text-lg" id={name}>
        {name}
      </p>
    </li>
  )
}

export default Skill
