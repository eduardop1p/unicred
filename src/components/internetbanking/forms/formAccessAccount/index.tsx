'use client';

import { twMerge } from 'tailwind-merge';

import { useAccountContext } from '@/utils/accountContext/useContext';
import useFromAccessAccount from '@/utils/fromAccessAccount/useFromAccessAccount';

import ErrorModal from '../../errorModal';
import Input from './input';

interface Props {
  className?: string;
}

export default function FormAccessAccount({ className }: Props) {
  const { handleSubmit, register, errors, clearErrors } = useFromAccessAccount({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });
  const {
    account: { account, agency },
  } = useAccountContext();

  return (
    <form
      className={twMerge('flex items-center gap-[10px]', className)}
      onSubmit={handleSubmit}
      onClick={event => event.stopPropagation()}
    >
      <Input
        name="agency"
        label="Agência"
        placeholder="Agência"
        register={register}
        className="w-[147px] max-[565px]:w-full"
        defaultValue={agency && agency !== 'N/D' ? agency : undefined}
      />
      <Input
        name="account"
        label="Conta"
        placeholder="Conta"
        register={register}
        className="w-[132px] max-[565px]:w-full"
        defaultValue={account && account !== 'N/D' ? account : undefined}
      />
      {account !== 'N/D' && agency !== 'N/D' && account && agency ? (
        <a
          href="/unicred-internetbanking"
          className={`h-[34px] px-3 flex items-center justify-center text-sm font-normal text-white bg-285148 rounded-[5px] cursor-pointer`}
        >
          Sair
        </a>
      ) : (
        <button
          type="submit"
          className={`h-[34px] px-3 max-[565px]:px-2 flex items-center justify-center text-sm font-normal text-white bg-285148 rounded-[5px] cursor-pointer`}
        >
          Accesar
        </button>
      )}
      {errors.account && errors.agency && (
        <ErrorModal clearErrors={clearErrors}>
          Agência ou conta inválida(s). Por favor, verifique seus dados.
        </ErrorModal>
      )}
      {errors.agency && !errors.account && (
        <ErrorModal clearErrors={clearErrors}>
          {errors.agency.message}
        </ErrorModal>
      )}
      {errors.account && !errors.agency && (
        <ErrorModal clearErrors={clearErrors}>
          {errors.account.message}
        </ErrorModal>
      )}
    </form>
  );
}
