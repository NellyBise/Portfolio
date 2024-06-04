import puce from '../src/puce.png'
import Image from 'next/image'

export default function Title3({ title }) {
  return (
    <div className="flex items-start">
      <Image className="mr-2" src={puce} alt="" width={30} height={30}></Image>
      <h3 className="text-3xl text-center text-main-color dark:text-secondary-color">
        {title}
      </h3>
    </div>
  )
}
