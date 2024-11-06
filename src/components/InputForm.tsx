import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";


type InputFormProps = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  options?: { value: string | number; label: string }[];
  isNumber?: boolean;
  className?: string;
};


export default function InputForm({
  name,
  label,
  type,
  placeholder,
  options,
  isNumber,
  className,
}: InputFormProps) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();


  return (
    <div className="w-[335px]">
      <label className="block text-customgray font-bold mt-2">{label}</label>
      {type === "radio" && options ? (
        <div className="flex space-x-4 mt-2">
          {options.map((data, index) => (
            <Controller
              key={index}
              control={control}
              name={name}
              render={({ field: { value: val, onChange } }) => {
                return (
                  <label className="flex items-center space-x-2">
                    <input
                      checked={data.value === val}
                      value={data.value}
                      type="radio"
                      className="form-radio "
                      onChange={(value) =>
                        onChange(
                          isNumber
                            ? Number(value.target.value)
                            : value.target.value
                        )
                      }
                    />
                    <span>{data.label}</span>
                  </label>
                );
              }}
            />
          ))}
        </div>
      ) : type === "textarea" ? (
        <textarea
          {...register(name)}
          placeholder={placeholder}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
          rows={4}
        />
      ) : (
        <input
          {...register(name, {
            setValueAs: (value) => (isNumber ? Number(value) : value),
          })}
          type={type}
          placeholder={placeholder}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
        />
      )}
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className="text-sm text-customPink mt-1 p-1">{message}</p>
        )}
      />
    </div>
  );
}



