"use client";
import InputForm from "@/components/InputForm";
import React from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

export default function page() {
  const methods = useForm();
  const { handleSubmit } = methods;

  const handleSave = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-md w-[902px] h-auto mt-32">
          <h2 className="flex justify-center underline text-customPink font-bold">
            FORM Users
          </h2>

          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(handleSave)}
              className="flex justify-center mb-2 items-center"
            >
              <div className="">
                {/* Usernamame - Profile */}
                <div className="w-[335px]">
                  <InputForm
                    label="Usernamame"
                    name="Username"
                    placeholder="udinsahrudin"
                    type="text"
                    required
                  />
                </div>

                {/* Password */}
                <div className="w-[335px]">
                  <InputForm
                    label="Password"
                    name="password"
                    placeholder="******"
                    type="password"
                    required
                  />
                </div>

                {/* profile */}
                <div className="w-[335px]">
                  <InputForm
                    label="Profile"
                    name="profile"
                    placeholder="input your profile here"
                    required
                    type="textarea"
                    
                  />
                </div>
                <div className="flex justify-center m-6">
                  <button
                    type="submit"
                    className="w-[142px] border-b-4 border-customPink border  text-customPink font-bold py-3 px-4 rounded-md hover:bg-customPink-dark focus:outline-none focus:ring-2 focus:ring-customPink focus:ring-opacity-50"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
          {/* Submit Button */}
        </div>
      </div>
    </div>
  );
}
