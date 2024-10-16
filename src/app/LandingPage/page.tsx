"use client";

import Footer from "@/components/Footer";
import Devision from "@/components/Devision";
import Information from "@/components/Information";
import Members from "@/components/Members";
import News from "@/components/News";
import YoutubeEmbed from "@/components/YoutubeEmbed";
import image from "@/Assets/Image/image";
import Image from "next/image";

export default function MyCarousel() {
  return (
    <div className="space-y-16">
        
      <div>
        <Members />
      </div>
      <div className="flex justify-center items-center w-[888px] h-[198px] rounded-xl mt-16 mx-[20%] bg-white">
        <Image src={image.logo2} alt="afs" width={144} height={140} />
        <div className="p-8 max-w-lg">
          <h1 className="text-xl text-customgray">
            Apa HMPS Pendidikan Informatika?
          </h1>
          <p className="text-[16px] text-customgray mt-4">
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
        <h1 className="text-3xl p-4 bg-customPink text-white mt-28">Videos</h1>
      </div>

      <div className=" flex gap-8 justify-center p-6">
        <YoutubeEmbed />
        <YoutubeEmbed />
        <YoutubeEmbed />
        <YoutubeEmbed />
      </div>

      <div className="bg-white">
        <div className="flex justify-center ">
          <h1 className="text-3xl p-4 bg-customPink text-white mt-28">
            Berita Utama
          </h1>
        </div>

        <div className="p-20 flex justify-center gap-4">
          <News />
          <News />
          <News />
          <News />
        </div>

        <div className="flex justify-center ">
          <h1 className="text-3xl p-4 bg-customPink text-white mt-28">
            Berita Terbaru
          </h1>
        </div>

        <div className="p-20 flex  flex-wrap justify-center gap-4">
          <News />
          <News />
          <News />
          <News />
          <News />
          <News />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
