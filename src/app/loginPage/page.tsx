import React from 'react'
import LoginPage from '@/components/LoginPage'
import logo from "@/Image/widgets/logo pif 2.jpg"
import gambar from "@/Image/widgets/Group 6.jpg"
import Background from '@/components/Background'


export default function page() {
  return (
    
        <div>
        <LoginPage logo={logo} />
        <div>
        <Background gambar={gambar}/>
        </div>
        
        </div>
        
  )
}
