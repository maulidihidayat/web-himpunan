import React from 'react'

export default function FormNews() {
  return (
    <div>
        <div className="flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-md w-[902px] h-auto mt-28">
            <h2 className="flex justify-center underline text-customPink font-bold  ">FORM NEWS</h2>
            <form action="" className="flex justify-center space-x-10 mb-2 items-center">
                <div className="space-y-4">
                    {/* Full name - Video Left*/}
                    <div className="w-[335px]">
                    <label
                    htmlFor="fullname"
                    className="block text-customgray font-bold mt-2"
                    >
                    Nama Lengkap
                    </label>
                    <input
                    type="text"
                    id="fullname"
                    required
                    placeholder="Udinsarudh"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
                    />
                    </div>

                    {/* Image */}
                    <div className="w-[335px]">
                        <label
                        htmlFor="image"
                        className="block text-customgray font-bold mt-2"
                        >
                        Gambar
                        </label>
                        <input
                        type="image"
                        id="image"
                        required
                        placeholder=""
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
                        />
                    </div>

                    {/* Video */}
                    <div className="w-[335px]">
                        <label
                        htmlFor="video"
                        className="block text-customgray font-bold mt-2"
                        >
                        Video
                        </label>
                        <input
                        type="video"
                        id="video"
                        required
                        placeholder=""
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    {/* Author - Description Right */}
                    <div className="w-[335px]">
                        <label
                            htmlFor="Author"
                            className="block text-customgray font-bold mt-2"
                            >
                            Penulis
                            </label>
                            <input
                            type="text"
                            id="author"
                            required
                            placeholder="Saya Sendiri"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
                        />
                    </div>

                    {/* Birthdate */}
                    <div className="w-[335px]">
                            <label
                            htmlFor="birthdate"
                            className="block text-customgray font-bold mt-2"
                            >
                            Hari dan tanggal
                            </label>
                            <input
                            type="date"
                            id="birthdate"
                            required
                            placeholder="?"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
                        />
                    </div>

                    {/* Description */}
                    <div className="w-[335px]">
                            <label
                            htmlFor="birthdate"
                            className="block text-customgray font-bold mt-2"
                            >
                            Description
                            </label>
                            <textarea
                            id="bio"
                            required
                            placeholder="Write something about yourself"
                            className="w-full h-[125px] p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
                            rows={1}
                            ></textarea>
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
