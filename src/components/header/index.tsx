'use client';

import Image from 'next/image';

import { useState } from 'react';

import FormAccessAccount from '../forms/formAccessAccount';
import Logo from './logo';
import MobileMenu from './mobileMenu';
import Nav from './nav';

export default function Header() {
  const [showForm, setShowForm] = useState(false);

  return (
    <header className="w-full bg-white p-3 border-t-[5px] border-solid border-t-a79450 flex flex-col gap-6 items-center">
      <div className="w-full max-w-[1140px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-[5px] max-[1200px]:hidden">
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
        <MobileMenu />
        <Logo width={200} height={45} />
        <a
          href="/unicred-internetbanking"
          className="hidden max-[1200px]:inline-block"
        >
          <svg viewBox="0 0 30.9 45" x="0px" y="0px" width={25} height={25}>
            <path
              d="M29.6 17.5H27V6.8C27 3.1 24 0 20.2 0h-9.4C7 0 4 3 4 6.8v10.7H1.3c-.7 0-1.3.6-1.3 1.3v17.1c0 5 4.1 9.1 9.1 9.1h12.7c5 0 9.1-4.1 9.1-9.1V18.8c0-.7-.6-1.3-1.3-1.3zm-9.7 19.4c-.2.3-.6.5-.9.5h-7c-.4 0-.7-.2-.9-.5-.2-.3-.3-.7-.1-1.1l2.1-5.6c-1-.8-1.7-2.1-1.7-3.4 0-2.3 1.9-4.2 4.2-4.2 2.3 0 4.2 1.9 4.2 4.2 0 1.3-.6 2.6-1.7 3.4l2.1 5.6c0 .3-.1.7-.3 1.1zm-14-19.4V6.8C5.9 3.6 7.6 2 10.7 2h9.4c3.2 0 4.8 1.7 4.8 4.8v10.7h-19z"
              fill="#c4c4c4"
            />
          </svg>
        </a>
        <div className="flex items-center gap-1 max-[1200px]:hidden">
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
