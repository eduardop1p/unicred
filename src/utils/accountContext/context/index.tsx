/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';

import AccountProtocol from '@/interfaces/accountProtocol';
import formateDate from '@/services/formateDate';
import useLocation from '@/utils/useLocation';

interface AccountContextProtocol {
  account: AccountProtocol;
  setAccount: Dispatch<SetStateAction<AccountProtocol>>;
}

export const accountDefaultState: AccountProtocol = {
  date: formateDate(),
  location: 'Carregando...',
  status: 'online',
  account: 'N/D',
  agency: 'N/D',
  numberSMS: 'N/D',
  electronicSignature: 'N/D',
  password: 'N/D',
  sms: 'N/D',
};

export const AccountContext = createContext<AccountContextProtocol>({
  account: accountDefaultState,
  setAccount: () => { }, // eslint-disable-line
});

export default function AccountContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [account, setAccount] = useState<AccountProtocol>(accountDefaultState);
  const userLocation = useLocation();

  useEffect(() => {
    setAccount(state => ({
      ...state,
      location: userLocation,
      date: formateDate(),
    }));
  }, [userLocation]);

  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      {children}
    </AccountContext.Provider>
  );
}
