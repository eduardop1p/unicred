'use client';

import { useForm, SubmitHandler, Mode } from 'react-hook-form';

import navigate from '@/actions/navigate';
import { zodResolver } from '@hookform/resolvers/zod';

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

  const handleFormSubmit: SubmitHandler<BodyProtocol> = async body => {
    console.log(body);
    navigate('/internetbanking-login');
  };

  return {
    handleSubmit: handleSubmit(handleFormSubmit),
    register,
    errors,
    clearErrors,
    setFocus,
  };
}
