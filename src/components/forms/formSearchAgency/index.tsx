'use client';

import Image from 'next/image';

import { FormEvent, useState } from 'react';

export default function FormSearchAgency() {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchValue) return;
    location.href = `https://unicred.com.br/atendimento/encontre-uma-agencia?query=${searchValue}`;
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
      <div className="flex items-center gap-3 justify-between h-[54px] w-[337px] border border-solid border-c4c4c4 px-5">
        <input
          value={searchValue}
          type="text"
          className="w-full bg-transparent text-[15px] font-normal text-808080 placeholder:text-808080"
          placeholder="Busque por cidade, estado ou endereço"
          onInput={event => setSearchValue(event.currentTarget.value)}
        />
        <Image
          src="/assets/svgs/search.svg"
          width={16}
          height={16}
          alt="search"
          className="flex-none"
        />
      </div>
      <button
        type="submit"
        className="w-[108px] h-[52px] rounded-[3px] flex items-center justify-center uppercase bg-018b6a text-white text-sm cursor-pointer"
      >
        Buscar
      </button>
    </form>
  );
}
