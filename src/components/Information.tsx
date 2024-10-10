import Image, { StaticImageData } from "next/image";
import React from "react";
import image from "@/Assets/Image/image";

interface InformationProps {
  nama: string;
  // gambar: StaticImageData;
  deskripsi: string;
}

const Information: React.FC<InformationProps> = ({ nama, deskripsi }) => {
  return (
    <div>
      <div className="flex">
        {/* <Image src={gambar} alt={nama} width={500} height={300} />  */}
        <div>
          <h1 className="bg-customPink w-20 text-white text-2xl text-center">
            {nama}
          </h1>
          <p className="w-[555px] h-16 text-xl">{deskripsi}</p>
        </div>
      </div>
    </div>
  );
};

export default Information;
