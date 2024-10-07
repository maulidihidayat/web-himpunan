import Link from "next/link";
import Image from "next/image"; // Pastikan import Image dari next/image
import React from "react";
import { Bell } from "lucide-react";
import logo from "@/components/Image/Asset 1@300x.png";

const NavBar = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-8 px-52 bg-customBlue text-white">
        <Image
          src={logo}
          alt="Himpunan Pendidikan Informatika"
          width={61}
          height={61}
        />

        <h1 className="text-2xl font-bold">Hmps Pendidikan Informatika</h1>
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link href="/docs" className="hover:text-blue-500">
            Docs
          </Link>
          <Link href="/activity" className="hover:text-blue-500">
            Activity
          </Link>
          <Link href="/management" className="hover:text-blue-500">
            Management
          </Link>
          <Link href="/about" className="hover:text-blue-500">
            About
          </Link>
        </div>
        <div>
          <Bell />
        </div>
        <button className="bg-customPink rounded-lg text-white w-20 h-11 ">
          Login
        </button>
      </div>
    </div>
  );
};

export default NavBar;
