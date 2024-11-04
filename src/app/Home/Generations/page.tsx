"use client";
import InputForm from "@/components/InputForm";
import React from "react";
import { FormProvider, FieldValues, useForm } from "react-hook-form";

export default function Page() {
  const methods = useForm();
  const { handleSubmit } = methods;

  const handleSave = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-md w-[902px] h-auto p-6">
          <h2 className="flex justify-center underline text-customPink font-bold text-2xl mb-4">
            FORM GENERATIONS
          </h2>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(handleSave)}
              className="flex flex-col justify-center items-center space-y-6"
            >
              <div className="w-[335px]">
                <InputForm
                  label="Generations"
                  name="Generations"
                  placeholder=""
                  type="date"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-[142px] border-b-4 border-customPink border text-customPink font-bold py-3 px-4 rounded-md hover:bg-customPink-dark focus:outline-none focus:ring-2 focus:ring-customPink focus:ring-opacity-50"
                >
                  Submit
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
