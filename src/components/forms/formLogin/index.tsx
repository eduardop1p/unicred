'use client';

import Image from 'next/image';

import { MouseEvent, useEffect } from 'react';

import useFormLogin from '@/utils/formLogin/useFormLogin';
import { useLoadingContext } from '@/utils/loadingContext/useContext';

import ErrorMsg from './errorMsg';

export default function FormLogin() {
  const {
    handleSubmit,
    errors,
    register,
    setValue,
    watch,
    handleReset,
    trigger,
    isSubmitted,
  } = useFormLogin();
  const { setIsLoading } = useLoadingContext();
  const passwordValue = watch('password');
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  const handleClickSetPassword = (event: MouseEvent<HTMLButtonElement>) => {
    const currentTarget = event.currentTarget;
    const value = currentTarget.value;
    setValue('password', `${passwordValue}${value}`);
    if (isSubmitted) trigger();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[1200px] mx-auto flex flex-col gap-6"
    >
      <div className="w-full grid grid-cols-2 h-[427px] gap-8">
        <div className="w-full border-solid border-ddd border flex flex-col rounded overflow-hidden h-full">
          <div className="w-full p-4 text-center text-5e5e47 text-lg border-solid border-b-ddd border-b">
            Digite seu usuário para acessar o Teclado Virtual
          </div>
          <div className="w-full p-4 flex flex-col items-center">
            <p className="text-center font-normal text-666 text-base mb-5">
              Se seu usuário não estiver correto, não continue a operação e
              entre em contato conosco.
            </p>
            <input
              type="text"
              {...register('user')}
              className={`${errors.user ? 'border-b55755' : 'border-ddd focus:border-166649'} w-full rounded border transition-colors duration-200 border-solid h-[48px] px-3 mb-4`}
              placeholder="Digite o usuário aqui"
            />
            {errors.user && <ErrorMsg>{errors.user.message}</ErrorMsg>}
          </div>
        </div>
        <div className="w-full border-solid border-ddd border flex flex-col rounded overflow-hidden h-full">
          <div className="w-full p-4 text-left text-5e5e47 text-lg border-solid border-b-ddd border-b">
            Teclado Virtual
          </div>
          <div className="w-full p-4 flex flex-col items-center">
            <p className="text-center font-normal text-666 text-base mb-5">
              Digite a sua senha eletrônica no teclado abaixo:
            </p>
            <input
              value={passwordValue}
              type="password"
              className="cursor-default bg-ececec py-[6px] pz-3 w-[108px] h-[34px] text-sm font-normal text-center text-555  border border-solid border-ccc rounded mb-4 shadow-input-password"
              readOnly
            />
            <div className="flex items-center flex-wrap gap-3 w-full justify-center mb-4">
              {numbers.map(item => (
                <button
                  key={item}
                  type="button"
                  className="h-[33px] py-[6px] px-4 text-sm text-white font-normal rounded bg-285148 cursor-pointer"
                  onClick={handleClickSetPassword}
                  value={item}
                >
                  {item}
                </button>
              ))}
            </div>
            {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
          </div>
        </div>
      </div>
      <div className="self-end flex items-center gap-[10px]">
        <button
          type="button"
          className="shadow-recovery-password rounded cursor-pointer text-sm font-normal py-[6px] px-3 text-666 bg-white"
        >
          Recuperar senha
        </button>
        <button
          type="button"
          className="rounded cursor-pointer text-sm font-normal py-[6px] px-3 text-white bg-285148"
          onClick={handleReset}
        >
          Limpar
        </button>
        <button
          type="submit"
          className="rounded cursor-pointer text-sm font-normal py-[6px] px-3 text-white bg-166649 hover:bg-43a376 transition-colors duration-200"
        >
          Confirmar
        </button>
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
