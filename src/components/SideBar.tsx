"use client";

import {
  CirclePlus,
  LayoutDashboard,
  LogOut,
  MessageCircleMore,
  NotepadText,
  Settings,
} from "lucide-react";
import React from "react";
import Image from "next/image";
import image from "@/Assets/Image/image";
import Link from "next/dist/client/link";

const page = () => {
  return (
    <div className="h-[100vh]  w-1/4 max-w-[20rem] p-6 shadow-xl bg-white shadow-blue-gray-900/5 fixed ">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Image src={image.logo2} alt="Logo" width={92} height={90} />
      </div>

      <h1 className="flex mx-auto bg-customPink w-44 h-12 rounded-lg text-lg text-white gap-2 justify-center items-center transition-colors duration-300 hover:bg-pink-600 cursor-pointer">
        Join Member <CirclePlus className="w-5 h-5" />
      </h1>

      <div className="mt-8 space-y-6 p-6 text-customgray">
        <Link href="/src/app/Home/Settings">
          <p className="flex items-center gap-3 text-lg transition-colors duration-300 hover:text-customBlue cursor-pointer">
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </p>
        </Link>

        <p className="flex items-center gap-3 text-lg transition-colors duration-300 hover:text-customBlue cursor-pointer">
          <MessageCircleMore className="w-5 h-5" /> Team Chat
        </p>

        <p className="flex items-center gap-3 text-lg transition-colors duration-300 hover:text-customBlue cursor-pointer">
          <NotepadText className="w-5 h-5" /> Planning
        </p>

        <p className="flex items-center gap-3 text-lg transition-colors duration-300 hover:text-customBlue cursor-pointer">
          <Settings className="w-5 h-5" /> Settings
        </p>

        <p className="flex items-center gap-3 text-lg transition-colors duration-300 hover:text-customPink cursor-pointer py-16">
          <LogOut className="w-5 h-5" /> Logout
        </p>
      </div>
    </div>
  );
};

export default page;
