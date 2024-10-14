import Image, { StaticImageData } from 'next/image'
import React from 'react'
import logo from "@/Assets/Image/widgets/logopif.png"
import gambar from "@/Assets/Image/widgets/Group 6.jpg"
import Background from '@/components/Background'
import Link from 'next/link'
import { SquareCheck } from 'lucide-react'
import gambar1 from "@/Assets/Image/widgets/bg11.png"

const LoginPage = () => {
  return (
<div className='bg-cover bg-center h-screen w-full' style={{backgroundImage: `url(${gambar1.src})`}}>

    <div className='fixed bg-white h-[100vh] w-[470px] right-0'>

        <div className="flex justify-center mt-12">
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

                {/* Input email */}
                <div className='m-4 '>
                <label htmlFor="email" className='block text-black font-semibold mb-2'>Email</label>
                <input type="email" id="email" name="email" placeholder='ahmadhapinuddin@gmail.com' className='w-96 h-14 border border-gray-500 rounded-xl px-4 placeholder:text-center' />
                </div>
                {/* Email end */}

                {/* Input password */}
                <div className='m-4'>
                    <label htmlFor="password"  className='block text-black font-semibold mb-2'>Password</label>
                    <input type="password" id='password' name='password' placeholder='******' className='w-96 h-14 border border-gray-500 rounded-xl px-4 placeholder:text-center' />
                </div>
                {/* Password end */}

                <div className='flex justify-center'>
                <SquareCheck
                className='pr-1'/>
                <Link className="text-black text-[10px] pt-1" href={"/"}>I Agree to the terms of service and privacy public </Link>
                {/* <p className='text-black text-[10px] pt-1'>I Agree to the terms of service and privacy public</p> */}
                </div>

            </form>
        </div>

        <div className=" flex justify-center">
          <button className="bg-customPink hover:bg-pink-300 font-semibold text-white p-1 mt-2 rounded-xl w-96 h-14">Login</button>
        </div>
        <Link className="flex justify-evenly font-semibold text-[10px] m-2 text-customPink" href={"/"}>Forgot Password?</Link>

        <span className="text-black font-semibold flex justify-center">Or</span>
        <span className="text-black flex justify-center text-sm">Already have an account?<Link className="flex justify-center text-sm text-customPink space-x-5" href={"/"}>Sign in</Link></span>

    </div>

</div>  
    
  )
}

export default LoginPage
