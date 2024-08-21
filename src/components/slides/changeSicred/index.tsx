'use client';

import Image from 'next/image';

import { useCallback, useRef } from 'react';

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

export default function SlideChangeSicred() {
  const sliderRef = useRef<SwiperRef>(null);

  const items = [
    {
      href: 'https://www.unicred.com.br/site/seg_guia_de_prevencao_de_fraude.pdf',
      title: 'Guia de Prevenção à Fraude',
    },
    {
      href: 'http://www.validcertificadora.com.br/P/B33036A7-C764-4A2A-892D-690A7EC19C62/RD028301',
      title: 'Emissão de Certificado Digital',
    },
    {
      href: 'https://unicred.com.br/solucoes/segundaViaBoleto',
      title: 'Segunda via de Boletos',
    },
    {
      href: 'https://www.unicred.com.br/solucoes/consulta-de-cheques',
      title: 'Consultar cheques',
    },
    {
      href: 'https://web.sipag.com.br/sipagportador/wrk/unicred/identCliente.jsp',
      title: 'Acessar o Portal de Cartões',
    },
    {
      href: 'https://www.bcb.gov.br/',
      title: 'Acessar o Banco Central',
    },
    {
      href: 'https://www.quanta-previdencia.com.br/',
      title: 'Acessar a Quanta Previdência',
    },
    {
      href: 'http://www.precaver.com.br',
      title: 'Simular Previdência',
    },
    {
      href: 'https://suasaudefinanceira.com.br',
      title: 'Sua Saúde Financeira',
    },
  ];

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="w-full max-w-[1225px] mx-auto relative">
      <>
        <button
          type="button"
          className={`absolute top-1/2 -translate-y-1/2 -left-10 cursor-pointer z-[5] max-[1330px]:hidden`}
          onClick={handlePrev}
        >
          <Image
            src="/assets/imgs/arrow-slide.png"
            width={20}
            height={30}
            alt="arrow-slide"
          />
        </button>
        <button
          type="button"
          className={`absolute top-1/2 -translate-y-1/2 -right-10 cursor-pointer z-[5] max-[1330px]:hidden`}
          onClick={handleNext}
        >
          <Image
            src="/assets/imgs/arrow-slide.png"
            width={20}
            height={30}
            alt="arrow-slide"
            className="rotate-180"
          />
        </button>
      </>
      <Swiper
        ref={sliderRef}
        slidesPerView={4.2}
        initialSlide={0}
        spaceBetween={10}
        autoplay
        loop
        breakpoints={{
          1100: {
            slidesPerView: 4.1,
          },
          800: {
            slidesPerView: 3.2,
          },
          0: {
            slidesPerView: 2.2,
          },
        }}
        modules={[Autoplay]}
        className="!w-full"
      >
        {items.map((item, i) => (
          <SwiperSlide key={i} className="!h-[124px]">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="h-full rounded-[3px] text-center text-808080 text-[22px] flex items-center justify-center py-[30px] px-[10px] bg-eceeef hover:bg-008d6a hover:text-white transition-colors duration-200"
            >
              {item.title}
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
