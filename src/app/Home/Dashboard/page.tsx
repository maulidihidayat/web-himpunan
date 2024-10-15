import React from "react";
import Chart from "./chart";
import SideBar from "@/components/SideBar";
import Calender from "./calender";
import HeaderDashboard from "@/components/Headerdashboard";

export default function Page() {
  return (
    <div className="flex h-screen w-1/4 items-center">
      <SideBar />
      <div className="flex flex-col mx-96 flex-grow  p-8 ">
        <div className="mb-32">
          <HeaderDashboard />
        </div>
        <div className="flex space-x-8 ">
          <div className="flex-grow">
            <Calender />
          </div>
          <div className="flex-grow ">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
}
