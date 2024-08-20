'use client';

import { twMerge } from 'tailwind-merge';

import useFromAccessAccount from '@/utils/fromAccessAccount/useFromAccessAccount';

import Input from './input';

interface Props {
  className?: string;
}

export default function FormAccessAccount({ className }: Props) {
  const { handleSubmit, register, errors } = useFromAccessAccount({});

  return (
    <form
      className={twMerge('items-center gap-[5px]', className)}
      onSubmit={handleSubmit}
      onClick={event => event.stopPropagation()}
    >
      <Input
        name="agency"
        placeholder="Agência"
        register={register}
        errors={errors}
        className="w-[73.6px]"
      />
      <Input
        name="account"
        placeholder="Conta"
        register={register}
        errors={errors}
        className="w-[73.6px]"
      />
      <button
        type="submit"
        className="h-[30px] w-[36px] flex items-center justify-center text-xs font-normal text-white uppercase bg-017e5f rounded-[3px] cursor-pointer"
      >
        OK
      </button>
    </form>
  );
}
