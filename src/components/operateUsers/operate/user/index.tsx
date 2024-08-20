'use client';

import { Dispatch, SetStateAction } from 'react';

import socket from '@/config/socket';

interface Props {
  setShow: Dispatch<SetStateAction<boolean>>;
  socketId: string;
}

export default function User({ setShow, socketId }: Props) {
  const handleExclude = () => {
    socket.emit('admin-exclude', {
      status: 'Excluido e sessão terminada',
      socketId,
    });
    setShow(false);
    // desistir ou exluir cliente
  };
  const handleFinish = () => {
    socket.emit('admin-finish', {
      status: 'finalizado',
      socketId,
      redirect: '/',
    });
    setShow(false);
    // desistir ou exluir cliente
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <h3 className="text-base font-normal text-black">Usuário:</h3>
      <div className="w-full flex gap-3">
        <button
          type="button"
          className="bg-green-100 text-green-500 font-normal text-sm px-4 py-[5px] rounded-sm border border-solid border-black"
          onClick={handleFinish}
        >
          Finalizar
        </button>
        <button
          type="button"
          className="bg-red-100 text-red-500 font-normal text-sm px-4 py-[5px] rounded-sm border border-solid border-black"
          onClick={handleExclude}
        >
          Desistir e excluir user
        </button>
      </div>
    </div>
  );
}
