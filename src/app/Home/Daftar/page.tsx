import HeaderDashboard from "@/components/Headerdashboard";
import SideBar from "@/components/SideBar";
import React from "react";
import Form from "./Form";

export default function Page() {
  return (
    <div className="flex h-screen overflow-x-hidden">
      <SideBar />
      <div className="w-1/4 ">
      </div>
      <div className="flex flex-col flex-grow">
        <HeaderDashboard />
        <div className="">
          <Form />     
        </div>
      </div>
    </div>
  );
}