import Image, { StaticImageData } from 'next/image'
import React from 'react'
import logo from "@/Assets/Image/widgets/logopif.png"
import Link from 'next/link'
import gambar1 from "@/Assets/Image/widgets/bg12.png"

const Register = () =>{
  return (  
    
    <div className="bg-cover bg-center h-screen w-full" style={{backgroundImage: `url(${gambar1.src})`}}>

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

              {/* Name Input */}
              <div className="m-4">
                <label htmlFor="fname" className="block text-black font-semibold mb-2">Name</label>
                <input type="text" id="fname" name="lname" placeholder='ahmadhapinuddin' className="w-96 h-14 border border-gray-500 rounded-xl px-4 placeholder:text-center" />
              </div>

              {/* Input email */}
              <div className='m-4 '>
              <label htmlFor="email" className='block text-black font-semibold mb-2'>Email</label>
              <input type="email" id="email" name="email" placeholder='ahmadhapinuddin@gmail.com' className='w-96 h-14 border border-gray-500 rounded-xl px-4 placeholder:text-center' />
              </div>
              {/* Email end */}

              {/* Input password */}
              <div className='m-4'>
                  <label htmlFor="password" className='block text-black font-semibold mb-2'>Password</label>
                  <input type="password" id='password' name='password' placeholder='******' className='w-96 h-14 border border-gray-500 rounded-xl px-4 placeholder:text-center' />
              </div>
              {/* Password end */}

          </form>
      </div>

      <div className=" flex justify-center">
          <button className="bg-customPink hover:bg-pink-300 font-semibold text-white p-1 mt-2 rounded-xl w-96 h-14">Login</button>
      </div>
      <Link className="flex justify-evenly font-semibold text-[10px] m-2 text-customPink" href={"/"}>Forgot Password?</Link>
      </div>

    </div>

  )
}

export default Register