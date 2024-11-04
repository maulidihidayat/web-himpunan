import Image, { StaticImageData } from 'next/image'
import React from 'react'
import logo from "@/Assets/Image/widgets/logopif.png"
import Link from 'next/link'
import gambar1 from "@/Assets/Image/widgets/bg12.png"



const LoginPage = () => {
  return (

<div className='bg-cover bg-center h-screen w-full' style={{backgroundImage: `url(${gambar1.src})`}}>

    <div className='fixed bg-white h-[100vh] w-[470px] right-0'>

        <div className="flex justify-center mt-16">
        <Image
            src={logo}
            width={92}
            height={90}
            alt=""
            className="pt-10"
        />
        </div>
        <h3 className="text-center mt-10 text-customPink font-bold">Forgot Password</h3>
        <p className="text-center mt-5 text-sm">Input your email to get
        your new password</p>


        <div className="flex justify-center">
            <form action="">

                {/* Input email */}
                <div className='m-4 '>
                <label htmlFor="email" className='block text-black font-semibold mb-2'>Email</label>
                <input type="email" id="email" name="email" placeholder='ahmadhapinuddin@gmail.com' className='w-96 h-14 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl px-4 placeholder:text-center' />
                </div>
                {/* Email end */}

            </form>
        </div>

        <div className=" flex justify-center mt-5">
          <button className="bg-customPink hover:bg-pink-300 font-semibold text-white p-1 mt-2 rounded-xl w-96 h-14">Send Reset Code</button>
        </div>

    </div>

</div>  
    
  )
}

export default LoginPage
