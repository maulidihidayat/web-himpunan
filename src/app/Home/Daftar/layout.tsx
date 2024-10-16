import { Sidebar } from "lucide-react";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        {children}
    </div>
  );
}