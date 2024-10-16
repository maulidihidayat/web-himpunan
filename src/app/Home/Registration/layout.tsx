import React from 'react'
import SideBar from "@/components/SideBar"
import Form from './Form'

export default function Layout({children}: {children:React.ReactNode}) {
  return (
    <div className="bg-white">{children}
         
    </div>
  )
}
