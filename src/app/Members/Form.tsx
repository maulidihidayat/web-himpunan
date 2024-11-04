"use client";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";

export default function FormMembers() {
  const { handleSubmit, register } = useForm();
  const handleSave = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-md w-[902px] h-auto mt-24">
        <h2 className="flex justify-center underline text-customPink font-bold  ">
          FORM MEMBERS
        </h2>
        <form
          onSubmit={handleSubmit((data) => handleSave(data))}
          className="flex justify-center space-x-10 mb-2 items-center"
        >
          <div className="space-y-4">
            {/* Full name - Video Left*/}
            <div className="w-[335px]">
              <label className="block text-customgray font-bold mt-2">
                Nama Lengkap
              </label>
              <input
                {...register("fullname")}
                type="text"
                required
                placeholder="Udinsarudh"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
              />
            </div>

            {/* Nomor Induk Mahasiswa/nim */}
            <div className="w-[335px]">
              <label className="block text-customgray font-bold mt-2">
                Nomor Induk Mahasiswa
              </label>
              <input
                {...register("nim")}
                type="text"
                required
                placeholder="210305002"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
              />
            </div>

            {/* Email */}
            <div className="w-[335px]">
              <label className="block text-customgray font-bold mt-2">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                required
                placeholder="udinsarudh@gmail.com"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
              />
            </div>

            {/* Phone Number */}
            <div className="w-[335px]">
              <label className="block text-customgray font-bold mt-2">
                Nomor Telepon
              </label>
              <input
                {...register("phone")}
                type="tel"
                required
                placeholder="081234567890"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
              />
            </div>
          </div>

          <div className="space-y-4">
            {/* Addres - Active right */}
            <div className="w-[335px]">
              <label className="block text-customgray font-bold mt-2">
                Alamat Lengkap
              </label>
              <input
                {...register("addres")}
                type="text"
                required
                placeholder="Selong"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
              />
            </div>

            {/* Gender */}
            <div className="w-[335px]">
              <label className="block text-customgray font-bold mt-2">
                Jenis Kelamin
              </label>
              <select
                {...register("gender")}
                name="gender"
                id="gender"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
              >
                <option value="">Jenis Kelamin</option>
                <option value="Laki-Laki">Laki-Laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>

            {/* Birthdate */}
            <div className="w-[335px]">
              <label className="block text-customgray font-bold mt-2">
                Tanggal Lahir
              </label>
              <input
                {...register("birthdate")}
                type="date"
                required
                placeholder="?"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
              />
            </div>

            {/* Active */}
            <div className="w-[335px]">
              <label className="block text-customgray font-bold mt-2">
                Aktif
              </label>
              <select
                {...register("Aktif", { setValueAs: (value) => Number(value) })}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
              >
                <option value="">pilih</option>
                <option value={1}>Aktif</option>
                <option value={0}>Tidak Aktif</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center m-6">
            <button
              type="submit"
              className="w-[142px] border-b-4 border-customPink border  text-customPink font-bold py-3 px-4 rounded-md hover:bg-customPink-dark focus:outline-none focus:ring-2 focus:ring-customPink focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
