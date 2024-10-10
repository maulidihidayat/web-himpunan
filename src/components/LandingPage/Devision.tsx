import { Aperture,ArrowRight } from "lucide-react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { title } from "process";
import React from "react";

interface Component {
  title : string
  tombol: string;
  description: string;
  
}

const Devision = ({ title , tombol, description, }: Component) => {
  return (
    <div>
      <div className="relative flex flex-col my-6 bg-customPink text-white shadow-sm border border-slate-200 rounded-lg w-[231px] h-[290px]">
        <div className="p-4">
        <Aperture className="ml-20 w-8 h-8"/>
          <h5 className="mb-2 text-slate-800 text-xl font-semibold">{title}</h5>
          <p className="text-slate-600 leading-normal font-light">
            {description}
          </p>

          <button
            className="flex rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-white text-center text-sm  bg-customGreen hover:bg-gray-700 transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            {tombol} <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Devision;
