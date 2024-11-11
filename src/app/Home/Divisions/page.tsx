"use client";
import InputForm from "@/components/InputForm";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import React from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const DivisionSchema = z.object({
  Division: z.string().min(1, { message: "harus diisi" }),
});

export default function Page() {
  const methods = useForm<z.infer<typeof DivisionSchema>>({
    defaultValues: {
      Division: "",
    },
    mode: "all",
    resolver: zodResolver(DivisionSchema),
  });
  const { handleSubmit } = methods;

  const handleSave = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-md w-[90%] md:w-[600px] h-auto p-6 mt-10">
        <h2 className="flex justify-center underline text-customPink font-bold text-2xl mb-4">
          FORM DIVISIONS
        </h2>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleSave)}>
            <div className="flex flex-col justify-center mb-4">
              <div className="w-full">
                <InputForm
                  label="Division"
                  name="Division"
                  placeholder=""
                  type="radio"
                  options={[
                    { value: "Agama", label: "Agama" },
                    { value: "Kominfo", label: "Kominfo" },
                    { value: "Humas", label: "Humas" },
                    { value: "Pendidikan", label: "Pendidikan" },
                    { value: "Lainnya", label: "Lainnya" },
                  ]}
                />
              </div>
            </div>
            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full md:w-[142px] border-b-4 border-customPink border text-customPink font-bold py-3 px-4 rounded-md hover:bg-customPink-dark focus:outline-none focus:ring-2 focus:ring-customPink focus:ring-opacity-50 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
