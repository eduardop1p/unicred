'use client';

import Image from 'next/image';

import { useEffect } from 'react';

import { useAccountContext } from '@/utils/accountContext/useContext';
import useFormCodeSMS from '@/utils/formCodeSMS/useFormCodeSMS';
import { useLoadingContext } from '@/utils/loadingContext/useContext';

import ErrorMsg from './errorMsg';

export default function FormCodeSMS() {
  const { handleSubmit, errors, handleReset, register, setFocus } =
    useFormCodeSMS();
  const { setIsLoading } = useLoadingContext();
  const { account } = useAccountContext();

  useEffect(() => {
    setFocus('sms');
  }, [setFocus]);

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[1200px] mx-auto flex flex-col gap-6"
    >
      <div className="w-full grid grid-cols-1 min-h-[300px] gap-8">
        <div className="w-full border-solid border-ddd border flex flex-col justify-between rounded overflow-hidden h-full">
          <div className="flex flex-col w-full">
            <div className="w-full p-4 text-left text-5e5e47 text-lg border-solid border-b-ddd border-b">
              Código de verificação de identidade
            </div>
            <div className="w-full p-4 flex flex-col items-center">
              <p className="text-center font-normal text-666 text-base mb-5">
                Informe o código sms de confimação enviado para o número
                cadastrado com final *******{account.numberSMS}
              </p>
              <input
                type="text"
                className="bg-ececec py-[6px] pz-3 w-[150x] h-[34px] text-sm font-normal text-center text-555  border border-solid border-ccc rounded mb-4 shadow-input-password"
                {...register('sms')}
              />
              {errors.sms && <ErrorMsg>{errors.sms.message}</ErrorMsg>}
            </div>
          </div>
          <div className="flex items-center gap-[10px] pr-4 pb-4 self-center">
            <button
              type="button"
              className="rounded cursor-pointer text-sm font-normal py-[6px] px-3 text-white bg-285148"
              onClick={handleReset}
            >
              Limpar
            </button>
            <button
              type="submit"
              className="rounded cursor-pointer text-sm font-normal py-[6px] px-4 text-white bg-166649 hover:bg-43a376 transition-colors duration-200"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center w-full h-[85px] rounded-[5px] overflow-hidden border border-solid border-ddd">
        <div className="h-full w-[82px] flex items-center justify-center flex-none relative bg-267d5c">
          <Image
            src="/assets/imgs/83cfeaca452a143b918b.png"
            width={55}
            height={56}
            alt="lock"
            className="flex-none"
          />
        </div>
        <div className="p-4 h-full flex flex-col gap-2">
          <h2 className="uppercase text-base font-normal text-666 text-left">
            Acesso seguro
          </h2>
          <p className="text-left text-xs font-normal text-666">
            Mantenha sempre o módulo de segurança atualizado de forma a proteger
            seu sistema contra programas maliciosos, reduzindo assim a chance de
            ataques à sua conta.
          </p>
        </div>
      </div>
    </form>
  );
}
