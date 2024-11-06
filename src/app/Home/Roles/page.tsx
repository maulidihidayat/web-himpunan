"use client";
import InputForm from "@/components/InputForm";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const RolesSchema = z.object({
  username: z.string().min(3, "isi Minimal 3 huruf"),
  password: z.string().min(8, "minimal 8 karakter"),
});

export default function Page() {
  const methods = useForm<z.infer<typeof RolesSchema>>({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "all",
    resolver: zodResolver(RolesSchema),
  });

  const { handleSubmit } = methods;

  const handleSave = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-md w-[902px] h-auto mt-44">
        <h2 className="flex justify-center underline text-customPink font-bold">
          FORM ROLES
        </h2>

        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(handleSave)}
            className="flex flex-col items-center mb-2"
          >
            <div className="w-[335px] mb-4">
              <InputForm
                label="Username"
                name="username"
                placeholder="udinsahrudin"
                type="text"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
              />
            </div>

            <div className="w-[335px] mb-4">
              <InputForm
                label="Password"
                name="password"
                placeholder="******"
                type="password"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
              />
            </div>

            <div className="flex justify-center m-6">
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
  );
}
