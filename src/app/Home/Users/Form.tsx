import React from 'react'

export default function FormEvents() {
  return (
    <div>
        <div className="flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-md w-[902px] h-auto mt-32">
            <h2 className="flex justify-center underline text-customPink font-bold">FORM Users</h2>
            <form action="" className="flex justify-center mb-2 items-center">
                <div className="">
                    {/* Usernamame - Profile */}
                    <div className="w-[335px]">
                    <label
                    htmlFor="username"
                    className="block text-customgray font-bold mt-2"
                    >
                    Nama Panggilan
                    </label>
                    <input
                    type="text"
                    id="username"
                    required
                    placeholder=""
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
                    />
                    </div>

                    {/* Password */}
                    <div className="w-[335px]">
                        <label
                        htmlFor="pwd"
                        className="block text-customgray font-bold mt-2"
                        >
                        Password
                        </label>
                        <input
                        type="password"
                        id="pwd"
                        required
                        placeholder="******"
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
                        />
                    </div>

                    {/* profile */}
                    <div className="w-[335px]">
                        <label
                        htmlFor="profile"
                        className="block text-customgray font-bold mt-2"
                        >
                        profil
                        </label>
                        <input
                        type="text"
                        id="profile"
                        required
                        placeholder="Saya adalah ultramen"
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
                        />
                    </div>
                </div>
            </form>
        {/* Submit Button */}
        <div className="flex justify-center m-6">
          <button
            type="submit"
            className="w-[142px] border-b-4 border-customPink border  text-customPink font-bold py-3 px-4 rounded-md hover:bg-customPink-dark focus:outline-none focus:ring-2 focus:ring-customPink focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
        </div>
    </div>
    </div>
  )
}
