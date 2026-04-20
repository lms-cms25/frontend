import Image from 'next/image'
import { liveClassImg } from '@/app/assets'

const page = () => {
  return (
    <>
      <section>
        <Image src={liveClassImg.src} width={liveClassImg.width} height={liveClassImg.height} alt=''/>
      </section>
      <section>
        
      </section>
    </>
  )
}

export default page