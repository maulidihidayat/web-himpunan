import HeaderDashboard from "@/components/Headerdashboard";
import SideBar from "@/components/SideBar";
import { Card, CardBody } from "@material-tailwind/react";
import React from "react";
import Setting from "./Setting";
import Form from "./form";

export default function Page() {
  return (
    <div className="flex h-screen overflow-x-hidden">
      <div className="w-1/4 ">
        <SideBar />
      </div>
      <div className="flex flex-col flex-grow">
        <HeaderDashboard />
        <div className="p-10">
          <Setting />
          
        </div>
      </div>
    </div>
  );
}
