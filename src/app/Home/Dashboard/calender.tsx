"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // pastikan file CSS diimport

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Calender({ className }: any) {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        locale="id-ID"
        className={`p-6 rounded-2xl shadow-xl  ${className}`}
      />
    </div>
  );
}
