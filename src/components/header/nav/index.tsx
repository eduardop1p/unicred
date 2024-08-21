import { useEffect, useRef, useState } from 'react';

import Logo from '../logo';
import Menu from './menu';
import MenuSocialMidia from './menuSocialMidia';

export default function Nav() {
  const navRef = useRef<HTMLElement | null>(null);
  const [navIsVisible, setNavIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            setNavIsVisible(false);
            // Lógica adicional aqui
          } else {
            setNavIsVisible(true);
          }
        });
      },
      {
        threshold: 0,
      }
    );

    if (navRef.current) {
      observer.observe(navRef.current);
    }
  }, []);

  return (
    <>
      <nav
        className="w-full max-w-[1000px] mx-auto flex items-center justify-between gap-8 max-[1200px]:hidden"
        ref={navRef}
      >
        <Menu />
        <MenuSocialMidia />
      </nav>
      <div
        className={`${!navIsVisible ? 'translate-y-0' : '-translate-y-full'} max-[1200px]:hidden transition-all duration-300 fixed top-0 left-0 w-full border-t-[3px] border-t-a79450 border-solid bg-fffffff2 h-[63px] flex items-center justify-center z-10`}
      >
        <div className="w-full max-w-[1140px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo width={135} height={20} />
            <Menu />
          </div>
          <MenuSocialMidia />
        </div>
      </div>
    </>
  );
}
