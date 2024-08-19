'use client';

import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { twMerge } from 'tailwind-merge';

import { BodyProtocol } from '@/utils/fromAccessAccount/validation';

interface Props {
  name: keyof BodyProtocol;
  placeholder: string;
  className?: string;
  register: UseFormRegister<BodyProtocol>;
  errors: FieldErrors<BodyProtocol>;
}

export default function Input({
  name,
  placeholder,
  className,
  register,
  errors,
}: Props) {
  const error = errors[name];

  return (
    <input
      type="text"
      id={name}
      placeholder={placeholder}
      {...register(name)}
      className={twMerge(
        `${error ? 'border-[2px] border-ce5563 focus:shadow-input-focus' : 'border border-c4c4c4'} h-[30px] rounded-[3px] border-solid text-808080 text-xs font-normal px-[10px] w-fit transition-all duration-150`,
        className
      )}
    />
  );
}
