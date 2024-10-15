import React from "react";

export default function Form() {
  return (
    <div className="flex justify-center items-center h-screen px-28  pb-72">
      <form className="w-full max-w-2xl">
        {/* Full Name and Phone Number */}
        <div className="flex space-x-10 mb-6">
          {/* Full Name */}
          <div className="w-[335px]">
            <label
              htmlFor="fullname"
              className="block text-customgray font-bold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              required
              placeholder="Udinsarudh"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
            />
          </div>

          {/* Phone Number */}
          <div className="w-[335px]">
            <label
              htmlFor="phone"
              className="block text-customgray font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              required
              placeholder="081234567890"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
            />
          </div>
        </div>

        {/* Email and Bio */}
        <div className="flex space-x-10 mb-6">
          {/* Email */}
          <div className="w-[335px]">
            <label
              htmlFor="email"
              className="block text-customgray font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="udinsarudh@gmail.com"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
            />
          </div>

          {/* Bio */}
          <div className="w-[335px]">
            <label
              htmlFor="bio"
              className="block text-customgray font-bold mb-2"
            >
              Bio
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

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-[142px] border-b-4 border-customPink border  text-customPink font-bold py-3 px-4 rounded-md hover:bg-customPink-dark focus:outline-none focus:ring-2 focus:ring-customPink focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
