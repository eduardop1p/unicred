import Image from 'next/image';

import FormAccessAccount from '../forms/formAccessAccount';

export default function Header() {
  return (
    <header className="w-full pr-4 pl-2 py-[10px] bg-166649 flex items-center max-[450px]:pr-2 max-[450px]:pl-0">
      <div className="w-full max-w-[1170px] mx-auto flex items-center justify-between gap-2 relative">
        <a
          href="/unicred-internetbanking"
          className="w-[146px] h-[50px] relative flex-none max-[450px]:w-[120px]"
        >
          <Image
            src="/assets/svgs/logo.svg"
            sizes="100%"
            fill
            alt="logo"
            className="!object-contain object-left"
          />
        </a>
        <FormAccessAccount />
      </div>
    </header>
  );
}
