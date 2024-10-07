import Link from "next/link";
import Image from "next/image"; // Pastikan import Image dari next/image
import React from "react";
import { Bell } from "lucide-react";
import logo from "@/components/Image/Asset 1@300x.png";

const NavBar = () => {
  return (
    <div className="bg-customBlue text-white">
      <div className="flex justify-between items-center py-8 px-8 md:px-52">
        <div className="flex items-center space-x-4">
          <Image
            src={logo}
            alt="Himpunan Pendidikan Informatika"
            width={61}
            height={61}
            priority
          />
          <h1 className="text-xl font-medium">Hmps Pendidikan Informatika</h1>
        </div>

        <div className="flex space-x-6 ml-24">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link href="/docs" className="hover:text-customPink">
            Docs
          </Link>
          <Link href="/activity" className="hover:text-customPink">
            Activity
          </Link>
          <Link href="/management" className="hover:text-customPink">
            Management
          </Link>
          <Link href="/about" className="hover:text-customPink">
            About
          </Link>
        </div>

        <div className="flex items-center space-x-4 absolute right-0 mr-10">
          <Bell />
          <button className="bg-customPink rounded-lg text-white w-20 h-11">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
