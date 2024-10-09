import { StaticImageData } from "next/image";
import { title } from "process";
import React from "react";

interface Devision {
  title: string;
  logo: string;
  description: string;
}

const Devision = ({ title, logo, description }: Devision) => {
  return (
    <div>
      <div className="max-w-sm p-6 bg-customPink border  rounded-2xl ">
        <img
          className="object-contain w-12 h-12  rounded-lg"
          src={logo}
          alt={title}
        />

        <a href="#">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-white dark:text-white">
            {title}
          </h5>
        </a>

        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-customGreen rounded-lg hover:bg-blue-800 "
        >
          {description}
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
      
    </div>
  );
};

export default Devision;
