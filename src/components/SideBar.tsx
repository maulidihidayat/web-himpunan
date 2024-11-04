"use client";

import {
  ChevronDown,
  ChevronUp,
  CirclePlus,
  LayoutDashboard,
  LogOut,
  MessageCircleMore,
  Newspaper,
  NotepadText,
  Settings,
} from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import image from "@/Assets/Image/image";
import Link from "next/link";

const Page = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [iconDropDown, setIconDropDown] = useState(<ChevronDown />);

  const handleIconDropDown = () => {
    if (iconDropDown === <ChevronDown />) {
      setIconDropDown(<ChevronUp />);
    } else {
      setIconDropDown(<ChevronDown />);
    }
  };

  return (
    <div className="h-[100vh] w-1/4 max-w-[20rem] p-6 shadow-xl bg-white shadow-blue-gray-900/5 fixed">
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

        {/* Dropdown Menu */}
        <div>
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-3 text-lg transition-colors duration-300 hover:text-customBlue cursor-pointer"
          >
            <Newspaper className="w-5 h-5" /> Options
            <ChevronDown />
          </button>

          {isDropdownOpen && (
            <div className="ml-8 mt-4 space-y-2 p-4 shadow-md rounded-md ">
              <Link href="/user">
                <p className="text-gray-700 hover:text-customBlue cursor-pointer">
                  User
                </p>
              </Link>
              <Link href="/event">
                <p className="text-gray-700 hover:text-customBlue cursor-pointer">
                  Event
                </p>
              </Link>
              <Link href="/member">
                <p className="text-gray-700 hover:text-customBlue cursor-pointer">
                  Member
                </p>
              </Link>
              <Link href="/roles">
                <p className="text-gray-700 hover:text-customBlue cursor-pointer">
                  Roles
                </p>
              </Link>
              <Link href="/division">
                <p className="text-gray-700 hover:text-customBlue cursor-pointer">
                  Division
                </p>
              </Link>
              <Link href="/news">
                <p className="text-gray-700 hover:text-customBlue cursor-pointer">
                  News
                </p>
              </Link>
              <Link href="/generation">
                <p className="text-gray-700 hover:text-customBlue cursor-pointer">
                  Generation
                </p>
              </Link>
            </div>
          )}
        </div>

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

export default Page;
