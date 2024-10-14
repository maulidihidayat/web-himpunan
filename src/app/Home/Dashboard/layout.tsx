import SideBar from "@/components/SideBar";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-500">
      <SideBar />
    </div>
  );
}
