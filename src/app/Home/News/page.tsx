"use client";
import InputForm from "@/components/InputForm";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const newsSchema = z.object({
  fullname: z.string().min(3, { message: "minimal 3 character" }),
  gambar: z.string().min(3, { message: "minimal 3 character}" }),
  video: z.string().min(3, { message: "minimal 3 character" }),
  penulis: z.string().min(3, { message: "minimal 3 character" }),
  tanggalLahir: z.string().min(3, { message: "minimal 3 character"}),
  deskripsi: z.string().min(3, { message: "minimal 3 character"})
});

export default function page() {

  const methods = useForm<z.infer<typeof newsSchema>>({
    defaultValues: {
      fullname: "",
      gambar: "",
      video: "",
      penulis: "",
      tanggalLahir: "",
      deskripsi: "",
    },
    mode:"all",
    reValidateMode: "onBlur",
    shouldFocusError: true,
    resolver:zodResolver(newsSchema)
  });
  const { handleSubmit } = methods;

  const handleSave = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-md w-[902px] h-auto mt-28">
          <h2 className="flex justify-center underline text-customPink font-bold  ">
            FORM NEWS
          </h2>

          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(handleSave)}
              action=""
              className="flex justify-center space-x-10 mb-2 items-center"
            >
              <div className="space-y-4">
                {/* Full name - Video Left*/}
                <div className="w-[335px]">
                  <InputForm
                    label="Full Name"
                    name="fullname"
                    placeholder="udinSarudin"
                    type="text"
                    className=""
                  />
                </div>

                {/* Image */}
                <div className="w-[335px]">
                  <InputForm
                    label="Gambar"
                    name="gambar"
                    placeholder="Gambar"
                    type="file"
                    className=""
                  />
                </div>

                {/* Video */}
                <div className="w-[335px]">
                  <InputForm
                    label="VIdeo"
                    name="video"
                    placeholder="video"
                    type="file"
                    className=""
                  />
                </div>
              </div>

              <div className="space-y-4">
                {/* Author - Description Right */}
                <div className="w-[335px]">
                  <InputForm
                    label="Achor"
                    name="penulis"
                    placeholder="penulis"
                    type="text"
                  />
                </div>

                {/* Birthdate */}
                <div className="w-[335px]">
                  <InputForm
                    label="Brith Date"
                    name="tangalLahir"
                    placeholder={""}
                    type="date"
                  />
                </div>

                {/* Description */}
                <div className="w-[335px]">
                  <InputForm
                    label="Description"
                    name="deskripsi"
                    placeholder="Fill Your Description"
                    type="textarea"
                    className=""
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
