import React from "react";
import Image from "next/image";
import Form from "./form";

export default function Setting() {
  return (
    <div>
      <div className="bg-white shadow-lg rounded-5xl w-[902px] h-[680px] flex flex-col mx-auto p-6">
        {/* Account Settings Title */}
        <div className="mb-6">
          <h1 className="text-customPink border border-customPink rounded-sm p-2 border-b-4 text-xl font-semibold">
            Account Settings
          </h1>
        </div>

        {/* Profile Header */}
        <div className="mb-6">
          <h1 className="text-customgray text-4xl">Your Profile</h1>
        </div>

        {/* Profile Picture and Buttons */}
        <div className="flex items-center space-x-10 mb-8">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1326/1326405.png"
            alt="Profile Picture"
            width={110}
            height={110}
            className="rounded-full"
          />

          <div className="flex space-x-5">
            <button className="bg-customPink text-white px-10 py-4 rounded-xl hover:bg-customDarkenBlue">
              Upload Image
            </button>
            <button className="bg-customgray text-white px-10 py-4 rounded-xl hover:bg-customDarkenBlue">
              Remove Profile Picture
            </button>
          </div>
        </div>

        <div className=" ">
          <Form />
        </div>
      </div>
    </div>
  );
}
