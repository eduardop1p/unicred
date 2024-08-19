'use client';

import { useContext } from 'react';

import { AccountContext } from '../context';

export function useAccountContext() {
  const { account, setAccount } = useContext(AccountContext);

  return { account, setAccount };
}
