'use client';

import Image from 'next/image';

import { useRef } from 'react';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import toScroll from '@/services/toScroll';

export default function SlideMainHome() {
  const sliderRef = useRef<SwiperRef>(null);

  const items = [
    {
      href: 'https://unicred.com.br/nome-da-entidade/fique-por-dentro/informativos/novidade-para-cooperados-envio-de-pix-para-conta-de-investimentos-no-btg-pactual-pelo-app-unicred-mobile-',
      imgSrc: '/assets/imgs/banners/home-slide/banner-1.webp',
    },
    {
      href: 'https://unicred.com.br/unicredpay?utm_source=banners&utm_medium=organic&utm_campaign=unicredpay_ubr&utm_content=site',
      imgSrc: '/assets/imgs/banners/home-slide/banner-2.webp',
    },
    {
      imgSrc: '/assets/imgs/banners/home-slide/banner-3.png',
    },
    {
      href: 'https://unicred.com.br/nome-da-entidade/fique-por-dentro/informativos/conheca-os-principais-beneficios-do-open-finance-unicred-',
      imgSrc: '/assets/imgs/banners/home-slide/banner-4.webp',
    },
  ];

  return (
    <Swiper
      ref={sliderRef}
      spaceBetween={8}
      initialSlide={0}
      slidesPerView={1}
      autoplay
      loop
      modules={[Autoplay, Pagination]}
      pagination={{
        el: '.my-pagination-main-home',
        type: 'bullets',
        clickable: true,
        bulletClass: 'swiper-custom-bullet',
        bulletActiveClass: 'swiper-custom-bullet-active',
      }}
      className="!w-full !h-c1 !relative"
    >
      {items.map((item, i) => (
        <SwiperSlide key={i} className="!w-full !h-full">
          {item.href ? (
            <a href={item.href} target="_blank">
              <Image
                src={item.imgSrc}
                alt="slide-1"
                sizes="100%"
                fill
                className="!object-cover"
              />
            </a>
          ) : (
            <Image
              src={item.imgSrc}
              alt="slide-1"
              sizes="100%"
              fill
              className="!object-cover"
            />
          )}
        </SwiperSlide>
      ))}
      <div className="my-pagination-main-home flex absolute right-48 bottom-6 z-[5] items-center gap-1"></div>
      <button
        type="button"
        className="absolute left-1/2 -translate-x-1/2 bottom-4 z-[5]"
        onClick={() => toScroll('change-sicred')}
      >
        <Image
          src="/assets/imgs/scroll-down_home.gif"
          alt="scroll-down"
          width={30}
          height={27}
        />
      </button>
    </Swiper>
  );
}
