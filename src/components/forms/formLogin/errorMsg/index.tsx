import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export default function ErrorMsg({ children }: Props) {
  return (
    <p className="w-full text-white font-normal bg-b55755 text-[15px] p-4 text-center rounded">
      {children}
    </p>
  );
}
