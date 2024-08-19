'use client';

import { ReactNode } from 'react';

import { twMerge } from 'tailwind-merge';

interface Props {
  href: string;
  className?: string;
  children: ReactNode;
}

export default function NavLink({ href, className, children }: Props) {
  return (
    <a
      href={href}
      className={twMerge(
        'text-555 font-normal text-[15px] uppercase cursor-pointer transition-all duration-300 flex-none relative hover:font-bold hover:before:scale-x-100 before:content-[""] before:absolute before:w-full before:h-[3px] before:bg-bba756 before:-bottom-1 before:scale-x-0 before:transition-transform before:origin-left before:duration-300',
        className
      )}
    >
      {children}
    </a>
  );
}
