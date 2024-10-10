import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface Register {
    logo : string | StaticImageData
}

const Register = ({logo}: Register) =>{
  return (
    <div className="bg-gray-300 w-full h-screen">

        <div className="flex justify-center">
            <Image 
            src={logo} 
            width={0}
            height={0}
            alt='/'
            className="pt-5"/>
        </div>

        <div className="flex flex-row justify-center">
        <div className="bg-white shadow-xl p-4 border max-w-sm">
            <h2 className="text-center text-2xl font-semibold mt-5 text-white">Register</h2>
            
            <div className="flex justify-center p-10">

                <form action="#">
                    {/* Name Input */}
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-black font-semibold mb-2"></label>
                        <input type="text" id="name" name="name" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" required />
                    </div>
                    {/* Email Input */}
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-black font-semibold mb-2"></label>
                        <input type="email" id="email" name="email" className=" border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" required />
                    </div>

                    {/* Password Input */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-black font-semibold mb-2"></label>
                        <input type="password" id="password" name="password" className=" border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Create password" required />
                    </div>

                    {/*konfirmasi Password Input */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-black font-semibold mb-2"></label>
                        <input type="password" id="password" name="password" className=" border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Confirm password" required />
                    </div>

                    {/* Button */}
                    <div className="mb-4">
                        <button type="submit" className="w-full bg-blue-500 py-2 rounded-lg hover:bg-blue-600 text-white font-semibold">Register now</button>
                    </div>
                </form>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Register