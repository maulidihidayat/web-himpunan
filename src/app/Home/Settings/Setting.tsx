"use client";
import InputForm from "@/components/InputForm";
import React from "react";
import { FormProvider, useForm, FieldValues } from "react-hook-form";

export default function Setting() {
  const methods = useForm();
  const { handleSubmit } = methods;

  const handleSave = (data: FieldValues) => {
    console.log(data);
  };

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

        <div className="flex justify-center items-center h-screen px-28 pb-72">
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(handleSave)}
              className="w-full max-w-2xl"
            >
              {/* Full Name and Phone Number */}
              <div className="flex space-x-10 mb-6">
                {/* Full Name */}
                <div className="w-[335px]">
                  <InputForm
                    label="Full Name"
                    name="username"
                    placeholder="Udin Sarudin"
                    required
                    type="text"
                  />
                </div>

                {/* Phone Number */}
                <div className="w-[335px]">
                  <InputForm
                    label="Phone Number"
                    name="phoneNumber"
                    placeholder="087XXXXXX"
                    required
                    type="tel"
                  />
                </div>
              </div>

              {/* Email and Bio */}
              <div className="flex space-x-10 mb-6">
                {/* Email */}
                <div className="w-[335px]">
                  <InputForm
                    label="Email"
                    name="email"
                    placeholder="udin@gmail.com"
                    required
                    type="email"
                  />
                </div>

                {/* Bio */}
                <div className="w-[335px]">
                  <InputForm
                    label="Bio"
                    name="bio"
                    placeholder="Input your bio here"
                    required
                    type="textarea"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-[142px] border-b-4 border border-customPink text-customPink font-bold py-3 px-4 rounded-md hover:bg-customPink-dark focus:outline-none focus:ring-2 focus:ring-customPink focus:ring-opacity-50"
                >
                  Update
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
