"use client";
import InputForm from "@/components/InputForm";
import React from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

export default function Page() {
  const methods = useForm();
  const { handleSubmit } = methods;

  const handleSave = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-[800px] p-10 mt-20">
        <h2 className="text-center underline text-customPink font-bold text-2xl mb-6">
          FORM MEMBERS
        </h2>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(handleSave)}
            className="grid grid-cols-2 gap-8"
          >
            <div className="space-y-4">
              <InputForm
                placeholder="Udin Sarudin"
                label="Full Name"
                name="name"
                type="text"
              />

              <InputForm
                placeholder="210030XXXX"
                label="Nomor Induk Mahasiswa"
                type="text"
                name="nim"
              />
              <InputForm
                placeholder="udin@gmail.com"
                label="Email"
                name="email"
                type="email"
              />
              <InputForm
                placeholder="087453XXXX"
                label="Phone Number"
                name="phone_number"
                type="tel"
              />
            </div>
            <div className="space-y-4">
              <InputForm
                placeholder="Mars"
                label="Alamat"
                name="address"
                type="text"
              />
              <InputForm
                placeholder=""
                label="Tanggal Lahir"
                name="birthdate"
                type="date"
              />
              <InputForm
                label="Jenis Kelamin"
                name="gender"
                type="radio"
                options={[
                  { value: "Laki-Laki", label: "Laki-Laki" },
                  { value: "Perempuan", label: "Perempuan" },
                ]}
                placeholder={""}
              />

              <InputForm
                label="Keaktifan"
                name="active"
                placeholder={""}
                type="radio"
                options={[
                  { value: "Aktif", label: "Aktif" },
                  { value: "Tidak Aktif", label: "Tidak Aktif" },
                ]}
              />
            </div>
            <div className="col-span-2 flex justify-center mt-6">
              <button
                type="submit"
                className="w-[150px] border-customPink border border-b-4 text-customPink font-bold py-3 rounded-md hover:bg-customPink-dark focus:outline-none focus:ring-2 focus:ring-customPink focus:ring-opacity-50 transition-all"
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
