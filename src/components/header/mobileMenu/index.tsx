'use client';

import { useEffect, useState } from 'react';
import { CgMenuLeft } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';

import Logo from '../logo';
import MenuSocialMidia from '../nav/menuSocialMidia';

export default function MobileMenu() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (showMenu) {
      htmlElement.style.overflow = 'hidden';
    } else {
      htmlElement.style.overflow = 'auto';
    }
  }, [showMenu]);

  return (
    <div className="hidden max-[1200px]:block relative">
      <button type="button" onClick={() => setShowMenu(!showMenu)}>
        <CgMenuLeft
          size={32}
          fill="#C4C4C4"
          className="!fill-C4C4C4 !text-C4C4C4"
        />
      </button>
      <div
        className={`${showMenu ? 'translate-x-0  visible' : '-translate-x-full invisible'} overflow-x-hidden overflow-y-auto origin-right fixed z-20 inset-0 w-full h-screen bg-white transition-all duration-300 flex flex-col`}
      >
        <div
          className="w-full px-6 py-3 flex items-center border-b border-solid border-ddd"
          onClick={() => setShowMenu(false)}
        >
          <Logo width={200} height={45} className="mx-auto" />
          <IoMdClose
            size={32}
            className="!fill-C4C4C4 !text-C4C4C4 flex-none"
          />
        </div>
        <div className="w-full bg-f8f8f8 p-6 flex flex-col mb-5">
          <div className="mb-3 w-full flex items-center justify-between h-[50px] border border-c4c4c4 border-solid px-4 bg-white rounded-sm">
            <span className="text-base font-normal text-555">
              Unicred do Brasil
            </span>
            <svg
              className="rotate-90"
              viewBox="0 0 7 12.8"
              x="0px"
              y="0px"
              width={16}
              height={16}
            >
              <path
                d="M.2.2c-.3.3-.3.7 0 1l5.2 5.2-5.2 5.2c-.3.3-.3.7 0 1 .3.3.7.3 1 0L6.8 7c.1-.2.2-.3.2-.5v-.1-.1c0-.2-.1-.4-.2-.5L1.2.2C.9-.1.5-.1.2.2z"
                fill="gray"
              />
            </svg>
          </div>
          <button
            type="button"
            className="self-end text-white font-normal text-[15px] bg-018b6a rounded-sm w-[70px] h-[45px]"
          >
            OK
          </button>
        </div>
        <div className="self-center scale-125">
          <MenuSocialMidia />
        </div>
        <div className="w-full flex flex-col p-6 gap-7">
          <div className="flex  justify-between items-center">
            <span className="uppercase text-555 text-base">Soluções</span>
            <svg viewBox="0 0 7 12.8" x="0px" y="0px" width={14} height={14}>
              <path
                d="M.2.2c-.3.3-.3.7 0 1l5.2 5.2-5.2 5.2c-.3.3-.3.7 0 1 .3.3.7.3 1 0L6.8 7c.1-.2.2-.3.2-.5v-.1-.1c0-.2-.1-.4-.2-.5L1.2.2C.9-.1.5-.1.2.2z"
                fill="gray"
              />
            </svg>
          </div>
          <div className="flex  justify-between items-center">
            <span className="uppercase text-555 text-base">
              Fique por dentro
            </span>
            <svg viewBox="0 0 7 12.8" x="0px" y="0px" width={14} height={14}>
              <path
                d="M.2.2c-.3.3-.3.7 0 1l5.2 5.2-5.2 5.2c-.3.3-.3.7 0 1 .3.3.7.3 1 0L6.8 7c.1-.2.2-.3.2-.5v-.1-.1c0-.2-.1-.4-.2-.5L1.2.2C.9-.1.5-.1.2.2z"
                fill="gray"
              />
            </svg>
          </div>
          <div className="flex  justify-between items-center">
            <span className="uppercase text-555 text-base">Atendimento</span>
            <svg viewBox="0 0 7 12.8" x="0px" y="0px" width={14} height={14}>
              <path
                d="M.2.2c-.3.3-.3.7 0 1l5.2 5.2-5.2 5.2c-.3.3-.3.7 0 1 .3.3.7.3 1 0L6.8 7c.1-.2.2-.3.2-.5v-.1-.1c0-.2-.1-.4-.2-.5L1.2.2C.9-.1.5-.1.2.2z"
                fill="gray"
              />
            </svg>
          </div>
          <a
            href="https://www.unicred.com.br/associe-se"
            className="flex  justify-between items-center"
          >
            <span className="uppercase text-555 text-base">Associe-se</span>
          </a>
          <div className="flex  justify-between items-center">
            <span className="uppercase text-555 text-base">Facilidades</span>
            <svg viewBox="0 0 7 12.8" x="0px" y="0px" width={14} height={14}>
              <path
                d="M.2.2c-.3.3-.3.7 0 1l5.2 5.2-5.2 5.2c-.3.3-.3.7 0 1 .3.3.7.3 1 0L6.8 7c.1-.2.2-.3.2-.5v-.1-.1c0-.2-.1-.4-.2-.5L1.2.2C.9-.1.5-.1.2.2z"
                fill="gray"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
