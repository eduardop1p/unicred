'use client';

import { UseFormRegister } from 'react-hook-form';

import { twMerge } from 'tailwind-merge';

import { BodyProtocol } from '@/utils/fromAccessAccount/validation';

interface Props {
  label: string;
  name: keyof BodyProtocol;
  placeholder?: string;
  className?: string;
  register: UseFormRegister<BodyProtocol>;
  defaultValue?: string;
}

export default function Input({
  label,
  name,
  placeholder,
  className,
  register,

  defaultValue,
}: Props) {
  return (
    <div
      className={twMerge(
        `flex items-center gap-2 bg-white overflow-hidden h-[34px] rounded-[5px]  px-3 py-[6px] w-fit `,
        className
      )}
    >
      <label className="text-999 text-base font-normal">{label}</label>
      {defaultValue ? (
        <input
          type="text"
          defaultValue={defaultValue}
          id={name}
          placeholder={placeholder}
          className={`cursor-default text-base font-normal w-full transition-all duration-150`}
          readOnly
        />
      ) : (
        <input
          type="text"
          id={name}
          placeholder={placeholder}
          {...register(name)}
          className={`text-base font-normal w-full transition-all duration-150`}
        />
      )}
    </div>
  );
}
