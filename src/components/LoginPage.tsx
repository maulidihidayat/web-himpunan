import Image, { StaticImageData } from 'next/image'
import React from 'react'
import logo from '@/Image/widgets/logo pif 2.jpg'
import Link from 'next/link'
import { SquareCheck } from 'lucide-react'
import gambar from "@/Image/widgets/Group 8.png"

interface LoginPage{
    logo : string | StaticImageData

}

const LoginPage = ({logo}: LoginPage) => {
  return (

<div className=''>

    <div className='fixed bg-white h-screen w-[570px] rounded-l-lg right-0'>

        <div className="flex justify-center">
        <Image
            src={logo}
            width={92}
            height={90}
            alt=""
            className="pt-10"
        />
        </div>

        <div className="flex justify-center">
            <form action="">

                <div className='m-4'>
                <label htmlFor="fname" className='block text-black font-semibold mb-2' >Nama</label>
                <input type="text" id='name' name='name' className='border border-black rounded-sm p-1' />
                </div>

                {/* Input email */}
                <div className='m-4'>
                <label htmlFor="email" className='block text-black font-semibold mb-2'>Email</label>
                <input type="email" id="email" name="email" className='border border-black rounded-sm p-1' />
                </div>
                {/* Email end */}

                {/* Input password */}
                <div className='m-4'>
                    <label htmlFor="password" className='block text-black font-semibold mb-2'>Password</label>
                    <input type="password" id='password' name='password' className='border border-black rounded-sm p-1' />
                </div>
                {/* Password end */}

                <div className='flex justify-center'>
                <SquareCheck
                className='pr-1'/>
                <p className='text-black text-[10px] pt-1'>I Agree to the terms of service and privacy public</p>
                </div>

            </form>
        </div>

        <div className=" flex justify-center">
            <button className="bg-deep-orange-500 font-semibold text-white p-1 mt-2 rounded-sm w-2/6">Login</button>
        </div>
        <Link className="flex justify-center text-white font-semibold text-[10px] m-2 underline" href={"/"}>Forgot Password</Link>

        <div>
        
        </div>

    </div>

</div>  
    
  )
}

export default LoginPage
