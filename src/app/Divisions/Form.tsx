import React from 'react'

export default function FormDivisions() {
  return (
    <div className="flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-md w-[902px] h-auto mt-60">
            <h2 className="flex justify-center underline text-customPink font-bold">FORM DIVISIONS</h2>
            <form action="flex justify-center">
                <div className="flex justify-center">
                    <div className="w-[335px]">
                            <label
                            htmlFor="Divisions"
                            className="block text-customgray font-bold mt-2"
                            >
                            Divisi-Divisi
                            </label>
                            <select name="division" id="division" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink">
                                <option value="">Pilih Divisi</option>
                                <option value="agama">Agama</option>
                                <option value="kominfo">Kominfo</option>
                                <option value="humas">Humas</option>
                                <option value="pendidikan">Pendidikan</option>
                            </select>
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
