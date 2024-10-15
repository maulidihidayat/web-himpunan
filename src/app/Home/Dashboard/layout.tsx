import SideBar from "@/components/SideBar";
import React, { ReactNode } from "react";
import Calender from "./calender";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="bg-white">
    {children}
    </div>;
}
