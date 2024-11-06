"use client"
import InputForm from "@/components/InputForm";
import { z } from "zod";
import React from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const MemberSchema = z.object({
  nim: z.string().min(10, { message: "Masukkan minimal 10 angka" }),
  email: z.string().email({ message: "Email tidak valid" }),
  name: z.string().min(3, { message: "Nama tidak boleh kurang dari 3 huruf" }),
  phone_number: z
    .string()
    .min(12, { message: "Nomor telepon minimal 12 angka" }),
  address: z.string().min(5, { message: "Alamat minimal 5 karakter" }),
  gender: z.string(),
  active: z.number(),
  birthdate: z.string().min(1, { message: "Tanggal lahir harus diisi" }),
});

export default function Page() {
  const methods = useForm <z.infer<typeof MemberSchema>>({
    defaultValues: {
      nim: "",
      email: "",
      name: "",
      phone_number: "",
      address: "",
      gender: "Laki-Laki",
      active: 1,
      birthdate: "",
    },
    mode: "all",
    resolver: zodResolver(MemberSchema),
  });

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
                placeholder="YYYY-MM-DD"
                label="Tanggal Lahir"
                name="birthdate"
                type="date"
              />
              <InputForm
                placeholder={""}
                label="Jenis Kelamin"
                name="gender"
                type="radio"
                options={[
                  { value: "Laki-Laki", label: "Laki-Laki" },
                  { value: "Perempuan", label: "Perempuan" },
                ]}
              />
              <InputForm
                placeholder={""}
                label="Keaktifan"
                name="active"
                type="radio"
                options={[
                  { value: 1, label: "Aktif" },
                  { value: 0, label: "Tidak Aktif" },
                ]}
                isNumber
              />
            </div>
            <div className="col-span-2 flex justify-center mt-6">
              <button
                type="submit"
                className="w-[150px] border-customPink border border-b-4 hover:border-b-[7px] text-customPink font-bold py-3 rounded-md hover:bg-customPink-dark focus:outline-none focus:ring-2 focus:ring-customPink focus:ring-opacity-50 transition-all"
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
