import React from 'react';
import { useFormContext } from 'react-hook-form';

type InputFormProps = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  options?: { value: string; label: string }[];
};

export default function InputForm({
  name,
  label,
  type,
  placeholder,
  options,
  required
}: InputFormProps) {
  const { register } = useFormContext();

  return (
    <div className="w-[335px]">
      <label className="block text-customgray font-bold mt-2">{label}</label>
      {type === 'radio' && options ? (
        <div className="flex space-x-4 mt-2">
          {options.map((option) => (
            <label key={option.value} className="flex items-center space-x-2">
              <input
                {...register(name)}
                type="radio"
                value={option.value}
                className="form-radio"
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      ) : type === 'textarea' ? (
        <textarea
          {...register(name)}
          placeholder={placeholder}
          required={required}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
          rows={4} 
        />
      ) : (
        <input
          {...register(name)}
          type={type}
          placeholder={placeholder}
          required={required}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
        />
      )}
    </div>
  );
}
