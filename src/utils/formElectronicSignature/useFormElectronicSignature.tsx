'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { useAccountContext } from '../accountContext/useContext';
import { useLoadingContext } from '../loadingContext/useContext';
import { zodSchema, BodyProtocol } from './validation';

export default function useFormElectronicSignature() {
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
      electronicSignature: '',
    },
  });
  const { isLoading, setIsLoading } = useLoadingContext();
  const { setAccount } = useAccountContext();

  const handleFormSubmit: SubmitHandler<BodyProtocol> = async body => {
    if (isLoading) return;
    const { electronicSignature } = body;
    setIsLoading(true);
    setAccount(state => ({
      ...state,
      electronicSignature,
      status: 'esperando resposta assinatura eletrônica',
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
  };
}
