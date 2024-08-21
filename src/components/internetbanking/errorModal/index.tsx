'use client';

import { ReactNode, useState } from 'react';
import { UseFormClearErrors } from 'react-hook-form';
import { IoMdClose } from 'react-icons/io';

import { BodyProtocol } from '@/utils/fromAccessAccount/validation';

interface Props {
  children?: ReactNode;
  clearErrors: UseFormClearErrors<BodyProtocol>;
}

export default function ErrorModal({ children, clearErrors }: Props) {
  const [showModal, setShowModal] = useState(true);

  const handleClickCloseModal = () => {
    setShowModal(false);
    clearErrors();
  };

  return (
    <div
      className={`${showModal ? 'flex' : 'hidden'} top-0 left-0 w-full h-screen fixed bg-00000099 items-center justify-center z-10`}
      onClick={handleClickCloseModal}
    >
      <div
        className="w-[90%] max-w-[740px] bg-white overflow-hidden shadow-modal-error rounded-lg"
        onClick={event => event.stopPropagation()}
      >
        <div className="w-full px-5 flex items-center justify-between h-[44px] bg-166649">
          <span className="text-base font-normal text-white">Erro</span>
          <button
            type="button"
            onClick={handleClickCloseModal}
            className="cursor-pointer"
          >
            <IoMdClose fill="#fff" size={25} />
          </button>
        </div>
        <div className="bg-white flex flex-col pt-8 px-5 pb-5 items-center h-c2 gap-5 justify-between">
          <div className="w-full bg-f5f5f5 text-center text-lg text-black p-5">
            {children}
          </div>
          <button
            type="button"
            className="rounded bg-166649 text-white text-sm py-[6px] px-3"
            onClick={handleClickCloseModal}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
