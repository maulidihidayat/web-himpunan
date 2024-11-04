import React from 'react'

export default function FormEvents() {
  return (
    <div>
        <div className="flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-md w-[902px] h-auto mt-10">
            <h2 className="flex justify-center underline text-customPink font-bold">FORM EVENTS</h2>
            <form action="" className="flex justify-center mb-2 items-center">
                <div className="">
                    {/* Type - Title Left*/}
                    <div className="w-[335px]">
                    <label
                    htmlFor="type"
                    className="block text-customgray font-bold mt-2"
                    >
                    Tipe
                    </label>
                    <input
                    type="text"
                    id="type"
                    required
                    placeholder=""
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
                    />
                    </div>

                    {/* Title */}
                    <div className="w-[335px]">
                        <label
                        htmlFor="title"
                        className="block text-customgray font-bold mt-2"
                        >
                        Judul
                        </label>
                        <input
                        type="title"
                        id="title"
                        required
                        placeholder=""
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
                            rows={3}
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
