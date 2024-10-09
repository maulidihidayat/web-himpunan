"use client";

import Devision from "@/components/LandingPage/Devision";
import Information from "@/components/LandingPage/Information";
import YoutubeEmbed from "@/components/YoutubeEmbed";
import image from "@/Image/image";
import Image from "next/image";

export default function MyCarousel() {
  return (
    <div className="space-y-16">
      <div className="flex justify-center items-center w-[888px] h-[198px] rounded-xl mt-16 mx-[20%] bg-white">
        <Image src={image.logo2} alt="afs" width={144} height={140} />
        <div className="p-8 max-w-lg">
          <h1 className="text-xl text-customgray">
            Apa HMPS Pendidikan Informatika?
          </h1>
          <p className="text-lg text-customgray mt-4">
            HMPS adalah Himpunan Mahasiswa Pendidikan Informatika yang mewadahi
            kegiatan mahasiswa jurusan Pendidikan Informatika Universitas
            Hamzanwadi.
          </p>
        </div>
      </div>

      <div className="flex px-32 py-10 text-white gap-8">
        <Information
          nama="Visi"
          deskripsi="Menjadi wadah kesatuan organisasi mahasiswa Sistem Informasi seluruh Indonesia yang bertujuan untuk melahirkan mahasiswa Sistem Informasi yang berwawasan IPTEK dan IMTAQ serta profesional dibidangnya."
        />
        <Information
          nama="Misi"
          deskripsi="Menjadi wadah kesatuan organisasi mahasiswa Sistem Informasi seluruh Indonesia yang bertujuan untuk melahirkan mahasiswa Sistem Informasi yang berwawasan IPTEK dan IMTAQ serta profesional dibidangnya."
        />
      </div>

      <div className="flex justify-center ">
        <h1 className="text-3xl p-4 bg-customGreen text-white mt-28">
          Our Division
        </h1>
      </div>

      <div className="flex gap-8 px-10 justify-center">
        <Devision
          title="Humas"
          tombol="Humas"
          description="Departemen yang bertugas untuk menjaga stabilitas dan meningkatkan kualitas akademik mahasiswa Sistem Informasi."
        />
        <Devision
          title="Keagamaan"
          tombol="Keagamaan"
          description="Departemen yang bertugas untuk menjaga stabilitas dan meningkatkan kualitas akademik mahasiswa Sistem Informasi."
        />
        <Devision
          title="Kewirausahaan"
          tombol="Kewirausahaan"
          description="Departemen yang bertugas untuk menjaga stabilitas dan meningkatkan kualitas akademik mahasiswa Sistem Informasi."
        />
        <Devision
          title="Media"
          tombol="Media"
          description="Departemen yang bertugas untuk menjaga stabilitas dan meningkatkan kualitas akademik mahasiswa Sistem Informasi."
        />
      </div>

      <div className="text-center text-white mt-20">
        <h1 className="text-4xl">Jargon Kami</h1>
        <p className="text-xl">Berinovasi , Berkontribusi dan Berprestasi</p>
      </div>

      <div className="flex justify-center ">
        <h1 className="text-3xl p-4 bg-customPink text-white mt-28">
          Videos
        </h1>
      </div>

      <div className=" flex gap-8 justify-center p-6">
        <YoutubeEmbed />
        <YoutubeEmbed />
        <YoutubeEmbed />
        <YoutubeEmbed />
      </div>
    </div>
  );
}
