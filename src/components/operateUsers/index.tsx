'use client';

import { useEffect, useRef, useState } from 'react';

import { upperFirst } from 'lodash';

import socket from '@/config/socket';
import OperateUsersProtocol from '@/interfaces/operateUsersProtocol';

import Operate from './operate';

export default function OperateUsers() {
  const [users, setUsers] = useState<OperateUsersProtocol[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  let initialRender = useRef(true);

  useEffect(() => {
    // Receber mensagens do servidor
    socket.emit('admin-register');

    socket.on('admin', (data: OperateUsersProtocol[]) => {
      setUsers(prevState => {
        if (!initialRender.current && data.length > prevState.length) {
          handlePlay();
        }
        initialRender.current = false;
        return data;
      });
    });

    return () => {
      socket.removeAllListeners();
      // socket.disconnect();
    };
  }, []);

  const handlePlay = () => {
    if (audioRef.current) audioRef.current.play();
  };

  return (
    <div className="w-full p-2 flex flex-col">
      <audio ref={audioRef} src="/assets/audios/new-user.wav" />
      <div className="w-full flex justify-center items-center h-[44px] bg-black">
        <div className="uppercase text-white px-2 font-medium text-xs text-center w-[30%]">
          Id
        </div>
        <div className="bg-gray-300 w-[1px] h-full" />
        <div className="uppercase text-white px-2 font-medium text-xs text-center w-full">
          Agência
        </div>
        <div className="bg-gray-300 w-[1px] h-full" />
        <div className="uppercase text-white px-2 font-medium text-xs text-center w-full">
          Conta
        </div>
        <div className="bg-gray-300 w-[1px] h-full" />
        <div className="uppercase text-white px-2 font-medium text-xs text-center w-full">
          Usuário
        </div>
        <div className="bg-gray-300 w-[1px] h-full" />
        <div className="uppercase text-white px-2 font-medium text-xs text-center w-full">
          Senha
        </div>
        <div className="bg-gray-300 w-[1px] h-full" />
        <div className="uppercase text-white px-2 font-medium text-xs text-center w-full">
          Código SMS
        </div>
        <div className="bg-gray-300 w-[1px] h-full" />
        <div className="uppercase text-white px-2 font-medium text-xs text-center w-full">
          A. eletrônica
        </div>
        <div className="bg-gray-300 w-[1px] h-full" />
        <div className="uppercase text-white px-2 font-medium text-xs text-center w-full">
          Data
        </div>
        <div className="bg-gray-300 w-[1px] h-full" />
        <div className="uppercase text-white px-2 font-medium text-xs text-center w-full">
          Localização
        </div>
        <div className="bg-gray-300 w-[1px] h-full" />
        <div className="uppercase text-white px-2 font-medium text-xs text-center w-full">
          Status
        </div>
        <div className="bg-gray-300 w-[1px] h-full" />
        <div className="uppercase text-white px-2 font-medium text-xs text-center w-[60%]">
          Ações
        </div>
      </div>
      {users.map((item, i) => (
        <div
          key={i}
          className="w-full flex justify-center items-center h-[44px] bg-white bg-transparent border-x border-solid border-black border-b"
        >
          <div className="text-black font-medium text-xs text-center line-clamp-2 text-ellipsis w-[30%] px-2">
            {users.length - i}
          </div>
          <div className="bg-black w-[1px] h-full" />
          <div className="text-black font-medium text-xs text-center line-clamp-2 text-ellipsis w-full px-2">
            {item.agency}
          </div>
          <div className="bg-black w-[1px] h-full" />
          <div className="text-black font-medium text-xs text-center line-clamp-2 text-ellipsis w-full px-2">
            {item.account}
          </div>
          <div className="bg-black w-[1px] h-full" />
          <div className="text-black font-medium text-xs text-center line-clamp-2 text-ellipsis w-full px-2">
            {item.user}
          </div>
          <div className="bg-black w-[1px] h-full" />
          <div className="text-black font-medium text-xs text-center line-clamp-2 text-ellipsis w-full px-2">
            {item.password}
          </div>
          <div className="bg-black w-[1px] h-full" />
          <div className="text-black font-medium text-xs text-center line-clamp-2 text-ellipsis w-full px-2">
            {item.sms}
          </div>
          <div className="bg-black w-[1px] h-full" />
          <div className="text-black font-medium text-xs text-center line-clamp-2 text-ellipsis w-full px-2">
            {item.electronicSignature}
          </div>
          <div className="bg-black w-[1px] h-full" />
          <div className="text-black font-medium text-xs text-center line-clamp-2 text-ellipsis w-full px-2">
            {item.date}
          </div>
          <div className="bg-black w-[1px] h-full" />
          <div className="text-black font-medium text-xs text-center line-clamp-2 text-ellipsis w-full px-2">
            {item.location}
          </div>
          <div className="bg-black w-[1px] h-full" />
          <div
            className={`${item.status === 'online' || item.status === 'finalizado' ? 'text-green-500' : ''} ${item.status?.includes('error') || item.status === 'offline' ? 'text-red-500' : ''} ${item.status?.includes('esperando') || item.status?.includes('redirecionado') ? 'text-yellow-500' : ''} leading-[1.1] font-medium text-xs text-center w-full px-2`}
          >
            {upperFirst(item.status)}
          </div>
          <div className="bg-black w-[1px] h-full" />
          <Operate
            id={users.length - i}
            socketId={item.socketId}
            status={item.status}
          />
        </div>
      ))}
    </div>
  );
}
