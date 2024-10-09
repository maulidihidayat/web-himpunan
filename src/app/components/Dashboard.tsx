import Link from 'next/link'
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import logo from "@/components/Image/Asset 1@300x.png"

interface Dashboard {
  logo : string | StaticImageData
}

const Dashboard = ({logo}: Dashboard) => {

  return (
    <>
      <div className="bg-gray-700 fixed h-screen w-1/5">

        <Image
        src={logo}
        width={92}
        height={90}
        alt=""
        className=""
        />

        <button>
          <Link href={"/"}>JOIN MEMBER</Link>
        </button>
        

      </div>
    </>
  )
}

export default Dashboard