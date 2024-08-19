import Image from 'next/image';

import NavLink from '../link';

export default function Menu() {
  return (
    <div className="flex items-center gap-3">
      <NavLink href="/">Institucional</NavLink>
      <div className="bg-e4e4e4 h-[13px] w-[1.5px] flex-none" />
      <NavLink href="/">Soluções</NavLink>
      <div className="bg-e4e4e4 h-[13px] w-[1.5px] flex-none" />
      <NavLink href="/">Fique por dentro</NavLink>
      <div className="bg-e4e4e4 h-[13px] w-[1.5px] flex-none" />
      <NavLink href="/">Atendimento</NavLink>
      <div className="bg-e4e4e4 h-[13px] w-[1.5px] flex-none" />
      <NavLink
        href="https://www.unicred.com.br/associe-se"
        className="font-bold"
      >
        Associe-se
      </NavLink>
      <div className="bg-e4e4e4 h-[13px] w-[1.5px] flex-none" />
      <Image
        src="/assets/svgs/search.svg"
        width={15}
        height={15}
        alt="search"
        className="flex-none"
      />
    </div>
  );
}
