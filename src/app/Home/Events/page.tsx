"use client";
import InputForm from "@/components/InputForm";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const eventSchema = z.object({
  type: z.string().min(2, { message: "please input min 2 word" }),
  tittle: z.string().min(5, { message: "input minimal 5 karakter kata" }),
  image: z.string().min(1, { message: "harus di isi" }),
  video: z.string().min(1, { message: "harus di isi" }),
  date: z.string().min(1, { message: "harus di isi" }),
  description: z.string().min(15, { message: " Minimal 15 kata" }),
});

export default function page() {
  const methods = useForm<z.infer<typeof eventSchema>>({
    defaultValues: {
      type: "",
      tittle: "",
      image: "",
      video: "",
      date: "",
      description: "",
    },
    mode: "all",
    resolver: zodResolver(eventSchema),
  });
  const { handleSubmit } = methods;

  const handleSave = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-md w-[902px] h-auto mt-10">
          <h2 className="flex justify-center underline text-customPink font-bold">
            FORM EVENTS
          </h2>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(handleSave)}
              action=""
              className="flex justify-center mb-2 items-center"
            >
              <div className="flex mx-auto s">
                {/* Type - Title Left*/}
                <div className="">
                  <div className="w-[335px]">
                    <InputForm
                      label="type"
                      name="type"
                      placeholder="Kegiatan"
                      type="text"
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
                    />
                  </div>

                  {/* Title */}
                  <div className="w-[335px]">
                    <InputForm
                      label="tittle"
                      name="tittle"
                      placeholder="Prestasi"
                      type="text"
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
                    />
                  </div>

                  {/* Image */}
                  <div className="w-[335px]">
                    <InputForm
                      label="image"
                      name="image"
                      placeholder=""
                      type="file"
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
                    />
                  </div>
                </div>

                {/* Video */}
                <div className="">
                  <div className="w-[335px]">
                    <InputForm
                      label="video"
                      name="video"
                      placeholder=""
                      type="file"
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
                    />
                  </div>

                  <div className="w-[335px]">
                    <InputForm
                      label="date"
                      name="date"
                      placeholder=""
                      type="date"
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
                    />
                  </div>
                  {/* Description */}
                  <div className="w-[335px]">
                    <InputForm
                      label="Description"
                      name="Description"
                      placeholder="Masukkan deskripsi konten"
                      type="textarea"
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center m-6">
                <button
                  type="submit"
                  className="w-[142px] border-b-4 border-customPink border  text-customPink font-bold py-3 px-4 rounded-md hover:bg-customPink-dark focus:outline-none focus:ring-2 focus:ring-customPink focus:ring-opacity-50"
                >
                  Submit
                </button>
              </div>
            </form>
          </FormProvider>
          {/* Submit Button */}
        </div>
      </div>
    </div>
  );
}
