import Image, { StaticImageData } from "next/image";
import React from "react";


interface InformationProps {
  nama: string;
  deskripsi: string;
  gambar?: StaticImageData; 
}

const Information: React.FC<InformationProps> = ({ nama, gambar, deskripsi }) => {
  return (
    <div>
      <div className="flex">
        <div>
          <h1 className="bg-customPink w-20 text-white text-2xl text-center">
            {nama}
          </h1>
          <p className="w-[555px] h-16 text-xl mt-2">{deskripsi}</p>
        </div>
        
      </div>
    </div>
  );
};

export default Information;
