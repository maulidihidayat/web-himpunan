"use client";

import { BellIcon, Mail } from "lucide-react";
import React from "react";
import Dropdown from "./Dropdown";

const HeaderDashboard = () => {
  const today = new Date();

  const date = today.getDate(); // Mendapatkan hari dalam bulan
  const dayOfWeek = today.getDay(); // Mendapatkan hari dalam minggu
  const month = today.getMonth(); // Mendapatkan bulan (index dimulai dari 0)
  const year = today.getFullYear(); // Mendapatkan tahun

  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl text-customgray">Dashboard</h1>
          <div className="flex gap-1">
            <p className="text-customPink">{days[dayOfWeek]},</p>
            <p>{date}</p>
            <p>{months[month]}</p>
            <p>{year}</p>
          </div>
        </div>
        <div className="flex items-center">
          <Mail className="text-customPink w-8" />
          <BellIcon className="text-customPink w-8" />
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default HeaderDashboard;
