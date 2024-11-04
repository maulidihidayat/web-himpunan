import React from 'react'

export default function FormEvents() {
  return (
    <div>
        <div className="flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-md w-[902px] h-auto mt-44">
            <h2 className="flex justify-center underline text-customPink font-bold">FORM ROLES</h2>
            <form action="" className="flex justify-center mb-2 items-center">
                <div className="">
                    {/* Type - Title Left*/}
                    <div className="w-[335px]">
                    <label
                    htmlFor="fname"
                    className="block text-customgray font-bold mt-2"
                    >
                    Nama Lengkap
                    </label>
                    <input
                    type="text"
                    id="fname"
                    required
                    placeholder="UdinSedunia"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
                    />
                    </div>

                    {/* Title */}
                    <div className="w-[335px]">
                        <label
                        htmlFor="isAdmin"
                        className="block text-customgray font-bold mt-2"
                        >
                        isAdmin
                        </label>
                        <input
                        type="text"
                        id="isAdmin"
                        required
                        placeholder=""
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
