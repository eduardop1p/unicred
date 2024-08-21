'use client';

import Image from 'next/image';

import { useRef } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import 'swiper/css/effect-fade';

export default function SlideSolutions() {
  const sliderRef = useRef<SwiperRef>(null);

  const items = [
    {
      title: 'Cartões',
      description:
        'A Unicred oferece o cartão que é a solução ideal para sua necessidade. Com ele, você realiza saques e compras em inúmeros estabelecimentos no Brasil e no exterior de forma segura – e ainda acumula vantagens quando o utiliza.',
      href: 'https://www.unicred.com.br/solucoes/cartoes',
      imgSrc: '/assets/imgs/solutions/cartoes_visa.png',
    },
    {
      title: 'Investimentos',
      description:
        'Para seus investimentos renderem mais, a Unicred oferece liquidez em diferentes produtos, de acordo com seu perfil. Conte também com a assessoria especializada de sua Cooperativa para garantir os melhores resultados.',
      href: 'https://www.unicred.com.br/solucoes/investimentos',
      imgSrc: '/assets/imgs/solutions/investimento.png',
    },
    {
      title: 'Linhas de Crédito',
      description:
        'Todo mundo tem sonhos, e a Unicred oferece a solução financeira que você busca para realizar os seus. Aproveite a consultoria e as linhas de crédito desenvolvidas especialmente para as necessidades de cada cooperado.',
      href: 'https://www.unicred.com.br/solucoes/linhas-de-credito',
      imgSrc: '/assets/imgs/solutions/linhas_de_credito.png',
    },
    {
      title: 'Previdência',
      description:
        'Planeje segurança e conforto para seu futuro e de sua família investindo desde cedo. Ao contratar um Plano de Previdência Unicred, você garante tranquilidade e resolve desde já as preocupações com aposentadoria.',
      href: 'https://www.unicred.com.br/solucoes/previdencia',
      imgSrc: '/assets/imgs/solutions/previdencia.png',
    },
  ];

  return (
    <Swiper
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      ref={sliderRef}
      spaceBetween={0}
      initialSlide={0}
      slidesPerView={1}
      autoplay
      loop
      modules={[Autoplay, EffectFade, Pagination]}
      pagination={{
        el: '.my-pagination-solutions',
        bulletClass: 'swiper-custom-bullet-solutions',
        bulletActiveClass: 'swiper-custom-bullet-solutions-active',
        type: 'bullets',
        clickable: true,
        renderBullet(index, className) {
          return `<span class='${className}'>${items[index].title}</span>`;
        },
      }}
      className="!w-full !h-auto !relative !pb-16 max-[800px]:!pb-7"
    >
      {items.map((item, i) => (
        <SwiperSlide key={i} className="!w-full">
          <div className="w-full flex items-center justify-between gap-10 max-[1150px]:gap-0 max-[1150px]:flex-col">
            <div className="flex flex-col">
              <div className="flex flex-col mb-10">
                <h1 className="text-[50px] font-light text-555555 leading-[1.5] uppercase">
                  Conheça Nossas
                </h1>
                <h1 className="text-[50px] font-bold text-555555 leading-[1.1] uppercase">
                  Soluções
                </h1>
              </div>
              <h2 className="text-lg pb-[10px] w-fit font-bold text-bba756 border-b-[2px] border-solid border-b-bba756 uppercase mb-[10px] leading-[1.1]">
                {item.title}
              </h2>
              <p className="text-left text-555555 font-normal text-base mb-[25px]">
                {item.description}
              </p>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-[25px] flex items-center uppercase text-xs text-808080 font-normal whitespace-normal group hover:text-bba756 transition-colors duration-300 w-fit"
              >
                Saiba mais
                <MdKeyboardArrowRight
                  size={22}
                  className="flex-none fill-808080 group-hover:fill-bba756"
                />
              </a>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-c4c4c4 hover:text-white transition-colors duration-300 bg-transparent w-[130px] h-[35px] text-xs uppercase text-979797 border border-solid border-c4c4c4 rounded-[3px] flex items-center justify-center"
              >
                Todas Soluções
              </a>
            </div>
            <div className="w-full mx-auto max-w-[640px] h-[550px] max-[640px]:min-h-14 relative flex-none">
              <Image
                src={item.imgSrc}
                sizes="100%"
                fill
                alt={item.title}
                className="object-contain"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="my-pagination-solutions w-full absolute bottom-[3px] z-[5] grid grid-cols-[repeat(auto-fit,minmax(55px,1fr))] items-center gap-4 left-1/2 -translate-x-1/2 border-b border-solid border-b-c4c4c4 max-[800px]:border-none max-[800px]:bottom-4"></div>
    </Swiper>
  );
}
