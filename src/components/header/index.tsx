'use client';

import Image from 'next/image';

import { useState } from 'react';

import FormAccessAccount from '../forms/formAccessAccount';
import Logo from './logo';
import Nav from './nav';

export default function Header() {
  const [showForm, setShowForm] = useState(false);

  return (
    <header className="w-full bg-white p-3 border-t-[5px] border-solid border-t-a79450 flex flex-col gap-6 items-center">
      <div className="w-full max-w-[1140px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-[5px]">
          <Image
            src="/assets/svgs/location.svg"
            alt="location"
            width={16}
            height={15}
            className="flex-none"
          />
          <p className="text-[14.4px] font-normal text-808080">
            {' '}
            Você está em: <span className="font-bold">Unicred do Brasil</span>
          </p>
          <Image
            src="/assets/svgs/arrow-down.svg"
            alt="arrow-down"
            width={14}
            height={17}
          />
        </div>
        <Logo width={200} height={45} />
        <div className="flex items-center gap-1">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setShowForm(true)}
          >
            <Image
              src="/assets/svgs/lock.svg"
              alt="location"
              width={16}
              height={15}
              className="flex-none"
            />
            <span className="text-808080 text-[15px] font-normal">
              Acesse sua conta
            </span>
          </div>
          <div className="flex flex-col relative gap-[5px]">
            <FormAccessAccount
              className={`${showForm ? 'opacity-100 visible flex' : 'opacity-0 invisible hidden'} transition-all duration-200`}
            />
            <div
              className={`${showForm ? 'flex' : 'hidden'} items-center gap-[5px] absolute left-0 -bottom-5`}
            >
              <input type="checkbox" className="input-checkbox-account" />
              <span className="text-[11px] font-normal text-979797">
                Lembrar agência e conta
              </span>
            </div>
          </div>
          {showForm ? (
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="cursor-pointer"
            >
              <Image
                src="/assets/svgs/close.svg"
                alt="close"
                width={14}
                height={17}
                className={`flex-none ml-1`}
              />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="cursor-pointer"
            >
              <Image
                src="/assets/svgs/arrow-down.svg"
                alt="arrow-down"
                width={14}
                height={17}
                className={`flex-none`}
              />
            </button>
          )}
        </div>
      </div>
      <Nav />
    </header>
  );
}
