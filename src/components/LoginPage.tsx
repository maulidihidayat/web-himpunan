import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Link from 'next/link'

interface LoginPage{
    logo : string | StaticImageData
}

const LoginPage = ({logo}: LoginPage) => {
  return (

    <div className=''>
        <div className="flex justify-center">
            <Image
                src={logo}
                width={92}
                height={90}
                alt=""
                className="pt-10"
            />
        </div>
    </div>  
    
  )
}

export default LoginPage
