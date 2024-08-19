import Image from 'next/image';

import FormAccessAccount from '../forms/formAccessAccount';

export default function Header() {
  return (
    <header className="w-full py-4 h-[69px] bg-166649 flex items-center">
      <div className="w-full max-w-[1170px] mx-auto flex items-center justify-between relative">
        <a
          href="/unicred-internetbanking"
          className="w-[202px] h-[50px] relative"
        >
          <Image
            src="/assets/svgs/logo.svg"
            sizes="100%"
            fill
            alt="logo"
            className="!object-contain"
          />
        </a>
        <FormAccessAccount />
      </div>
    </header>
  );
}
