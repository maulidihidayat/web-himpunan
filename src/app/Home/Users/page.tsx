"use client";
import InputForm from "@/components/InputForm";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const userSchema = z.object({
  Username: z.string().min(3, { message: "Minimal 3 character" }),
  password: z.string().min(8, { message: "minimal 8 character" }),
  profile: z.string().min(15, { message: "minimal 15 character" }),
});

export default function page() {
  const methods = useForm<z.infer<typeof userSchema>>({
    defaultValues: {
      Username: "",
      password: "",
      profile: "",
    },
    mode: "all",
    resolver: zodResolver(userSchema),
  });

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
                  />
                </div>

                {/* Password */}
                <div className="w-[335px]">
                  <InputForm
                    label="Password"
                    name="password"
                    placeholder="******"
                    type="password"
                  />
                </div>

                {/* profile */}
                <div className="w-[335px]">
                  <InputForm
                    label="Profile"
                    name="profile"
                    placeholder="input your profile here"
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
