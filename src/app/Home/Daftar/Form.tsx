import React from "react";

export default function Form() {
  return (

    

      <div className="flex justify-center mt-10">
        <div className="w-[902px] h-auto items-center p-5 rounded-2xl shadow-md">
        <h4 className="text-customPink border border-customPink mb-6 p-1 rounded-sm w-1/4 text-center">Registration Member</h4>
         <hr className="border-t-2  border-gray-300"/> 
        <form className="flex max-w-2xl space-x-10 items-center">
          {/* Full Name and */}
          <div className="mb-6 space-y-4">
            {/* Full Name */}
            <div className="w-[335px]">
              <label
                htmlFor="fullname"
                className="block text-customgray font-bold mt-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                required
                placeholder="Udinsarudin"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
              />
            </div>

            {/* Nomor Induk */}
            <div className="w-[335px]">
              <label
                htmlFor="nomor induk"
                className="block text-customgray font-bold mt-2"
              >
                Nim
              </label>
              <input
                type="nomor induk"
                id="nomor induk"
                required
                placeholder="210305002"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
              />
            </div>

            {/* Tahun */}
            <div className="w-[335px]">
              <label
                htmlFor="year"
                className="block text-customgray font-bold mt-2"
              >
                Grade
              </label>
              <input
                type="year"
                id="year"
                required
                placeholder="2021"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
              />
            </div>

            {/* Class */}
            <div className="w-[335px]">
              <label
                htmlFor="phone"
                className="block text-customgray font-bold mt-2"
              >
                Class
              </label>
              <input
                type="tel"
                id="phone"
                required
                placeholder="A"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
              />
            </div>

            {/* Email */}
            <div className="w-[335px]">
              <label htmlFor="email" className="text-customgray font-bold mt-2"
              >
                Email
              </label>
              <input 
              type="email"
              id="email"
              required
              placeholder="ahmadhapinuddin@gmail.com"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-customPink"
              />
            </div>
          </div>

          {/* Devision and Reason */}
          <div className="space-y-4 mb-6">
            {/* Devision */}
            <div className="w-[335px]">
              <label
                htmlFor="email"
                className="block text-customgray font-bold mt-2"
              >
                Devision
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="Divisi Agama"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
              />
            </div>

            {/* Reason */}
            <div className="w-[335px]">
              <label
                htmlFor="bio"
                className="mt-2 block text-customgray font-bold"
              >
                Reason
              </label>
              <textarea
                id="bio"
                required
                placeholder="Write something about yourself"
                className="w-full h-[125px] p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
                rows={3}
              ></textarea>
            </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-28 w-[142px] border-b-4 border-customPink border  text-customPink font-bold py-3 px-4 rounded-md hover:bg-customPink-dark focus:outline-none focus:ring-2 focus:ring-customPink focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
          </div>
        </form>
        </div>
      </div>


  );
}