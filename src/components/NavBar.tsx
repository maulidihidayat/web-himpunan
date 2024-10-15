import Link from "next/link";
import Image from "next/image"; // Pastikan import Image dari next/image
import React from "react";
import { Bell } from "lucide-react";
import image from "@/Assets/Image/image";

const NavBar = () => {
  return (
    <div className="bg-customBlue text-white sticky top-0 ">
      <div className="flex justify-between items-center py-8 px-8 md:px-52">
        <div className="flex items-center space-x-4">
          <Image
            src={image.logo}
            alt="Himpunan Pendidikan Informatika"
            width={61}
            height={61}
            priority
          />
          <h1 className="text-xl font-semibold">Hmps Pendidikan Informatika</h1>
        </div>

        <div className="flex space-x-6 ml-24 text-sm">
          <Link href="/" className="hover:text-blue-500">
            HOME
          </Link>
          <Link href="/docs" className="hover:text-customPink">
            DOCS
          </Link>
          <Link href="/activity" className="hover:text-customPink">
            ACTIVITY
          </Link>
          <Link href="/management" className="hover:text-customPink ">
            MANAGEMENTS
          </Link>
          <Link href="/about" className="hover:text-customPink">
            ABOUT
          </Link>
        </div>

        <div className="flex items-center space-x-4 absolute right-0 mr-10">
          {/* ini untuk icon bell */}
          <Link href="/">
            <Bell />
          </Link>

          <button className="bg-customPink rounded-lg text-white w-20 h-11 hover:bg-customDarkBlue">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
