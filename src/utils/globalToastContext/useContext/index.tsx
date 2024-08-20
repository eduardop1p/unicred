'use client';

import { useContext } from 'react';

import { GlobalToastContext } from '../context';

export function useGlobalToastContext() {
  const { openAlert, setOpenAlert } = useContext(GlobalToastContext);

  return { openAlert, setOpenAlert };
}
