import Image, { StaticImageData } from 'next/image'
import React from 'react'


interface Background{
    gambar : string | StaticImageData

}
const Background = ({gambar}: Background) => {
  return (
    <>
    
    <Image 
    src={gambar}
    width={0}
    height={0}
    alt=''
    className='bg-cover bg-center bg-fixed h-screen w-full'/>

    </>
  )
}

export default Background