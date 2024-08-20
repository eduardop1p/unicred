'use client';

import { useState } from 'react';

import Ask from './ask';
import Errors from './errors';
import User from './user';

interface Props {
  id: number;
  socketId: string;
  status: string;
}

export default function Operate({ id, socketId, status }: Props) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    if (status === 'offline' || status === 'finalizado') {
      alert(`cliente não pode ser operado, devido ao seu status ser ${status}`);
      return;
    }
    setShow(!show);
  };

  return (
    <div className="w-[60%] h-full px-2">
      <button
        type="button"
        className="uppercase cursor-pointer line-clamp-2 text-ellipsis text-blue-500 font-medium text-xs text-center w-full h-full flex items-center justify-center"
        onClick={handleClick}
      >
        Operar
      </button>
      <div
        className={`${show ? 'flex' : 'hidden'} fixed top-0 left-0 bg-0006 w-full h-screen items-center justify-center`}
        onClick={() => setShow(false)}
      >
        <div
          onClick={event => event.stopPropagation()}
          className="bg-white rounded overflow-hidden"
        >
          <div className="w-full max-w-[600px] max-h-[90vh] overflow-auto flex flex-col gap-4 items-start p-4">
            <h1 className="text-xl font-medium text-black text-center w-full">
              Operar user id: {id}
            </h1>
            <User socketId={socketId} setShow={setShow} />
            <Errors setShow={setShow} socketId={socketId} />
            <Ask setShow={setShow} socketId={socketId} />
          </div>
        </div>
      </div>
    </div>
  );
}
