import React from 'react'

export default function FormDivisions() {
  return (
    <div className="flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-md w-[902px] h-auto mt-60">
            <h2 className="flex justify-center underline text-customPink font-bold">FORM GENERATIONS</h2>
            <form action="flex justify-center">
                <div className="flex justify-center">
                    <div className="w-[335px]">
                            <label
                            htmlFor="year"
                            className="block text-customgray font-bold mt-2"
                            >
                            Tahun Angkatan
                            </label>
                            <input
                            type="date"
                            id="year"
                            required
                            placeholder="Udinsarudh"
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
  )
}
