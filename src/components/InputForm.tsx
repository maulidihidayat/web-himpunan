import React from 'react'
import { useFormContext } from 'react-hook-form'

export default function InputForm({name, label, type}:{name:string, label:string, type:string}) {
    const{register}=useFormContext()
  return (

    <div>
        <div className="w-[335px]">
              <label className="block text-customgray font-bold mt-2">
                {label}
              </label>
              <input
                {...register(name)}
                type={type}
                placeholder="Udinsarudh"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
              />
            </div>
    </div>
  )
}
