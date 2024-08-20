'use client';

import React, {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';

import AlertMsg, { OpenAlertType } from '@/components/alertMsg';

interface GlobalToastContextProtocol {
  openAlert: OpenAlertType;
  setOpenAlert: Dispatch<SetStateAction<OpenAlertType>>;
}

const defaultState: OpenAlertType = {
  open: false,
  msg: '',
  severity: 'success',
};

export const GlobalToastContext = createContext<GlobalToastContextProtocol>({
  openAlert: defaultState,
  setOpenAlert: () => { }, // eslint-disable-line
});

export default function GlobalToastContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openAlert, setOpenAlert] = useState<OpenAlertType>(defaultState);

  return (
    <GlobalToastContext.Provider value={{ openAlert, setOpenAlert }}>
      {children}
      <AlertMsg openAlert={openAlert} setOpenAlert={setOpenAlert} />
    </GlobalToastContext.Provider>
  );
}
