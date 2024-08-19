export const revalidate = 600; // revalidar essa página a cada 10 minutos

// Import Swiper styles
import 'swiper/css';

import Image from 'next/image';

import getBrlVariation from '@/actions/getBrlVariation';
import getIbovVariation from '@/actions/getIbovVariation';
import Footer from '@/components/footer';
import FormSearchAgency from '@/components/forms/formSearchAgency';
import Header from '@/components/header';
import SlideChangeSicred from '@/components/slides/changeSicred';
import SlideMainHome from '@/components/slides/mainHome';
import SlideSolutions from '@/components/slides/solutions';
import StayInside from '@/components/stayInside';

export default async function Page() {
  const euro = await getBrlVariation({ currencyPair: 'EUR-BRL' });
  const usd = await getBrlVariation({ currencyPair: 'USD-BRL' });
  const ibov = await getIbovVariation();

  return (
    <>
      <Header />
      <main className="w-full min-h-screen">
        <SlideMainHome />
        <section
          id="change-sicred"
          className="w-full flex flex-col py-[50px] items-center"
        >
          <h1 className="text-555555 font-bold text-[40px] mb-10 text-center leading-[1.1]">
            Escolha Cooperar. Escolha Unicred.
          </h1>
          <h2 className="text-center font-bold text-bba756 text-2xl uppercase mb-4 ">
            O que você está procurando?
          </h2>
          <SlideChangeSicred />
        </section>
        <section className="bg-eceeef pt-8 px-5 w-full">
          <div className="flex flex-col items-start justify-between w-full max-w-[1140px] mx-auto">
            <SlideSolutions />
          </div>
        </section>
        <section className="w-full bg-white py-20 px-5">
          <div className="flex flex-col w-full max-w-[1140px] mx-auto">
            <div className="flex items-center justify-between gap-8 mb-5">
              <h1 className="uppercase text-[30px] text-555555 font-bold leading-[1.1] ">
                FIQUE POR DENTRO
              </h1>
              <a
                href="https://unicred.com.br/fique-por-dentro"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-c4c4c4 hover:text-white transition-colors duration-300 bg-transparent w-[95px] h-[35px] text-xs uppercase text-979797 border border-solid border-c4c4c4 rounded-[3px] flex items-center justify-center"
              >
                Saiba mais
              </a>
            </div>
            <StayInside euro={euro} usd={usd} ibov={ibov} />
          </div>
        </section>
        <section className="bg-eceeef w-full py-[120px] px-5">
          <div className="flex items-center justify-between w-full max-w-[1140px] mx-auto">
            <div className="flex flex-col w-full max-w-[550px]">
              <h1 className="text-[50px] font-light text-555555 leading-[1.2] uppercase">
                Encontre uma Agência
              </h1>
              <h1 className="text-[50px] font-bold text-555555 leading-[1.2] uppercase">
                perto de você
              </h1>
            </div>
            <FormSearchAgency />
          </div>
        </section>
        <section className='w-full h-[270px] bg-no-repeat bg-[url("/assets/imgs/bg_1366_mobile.jpg")] bg-cover flex items-center justify-center'>
          <div className="w-full max-w-[1000px] mx-auto flex items-center justify-between gap-8">
            <Image
              src="/assets/imgs/banner_mobile.png"
              width={182}
              height={360}
              alt="banner-mobile"
            />
            <div className="flex flex-col gap-5 w-full max-w-[340px]">
              <h1 className="text-[50px] font-semibold text-white leading-[1.1]">
                Aplicativo Unicred Mobile
              </h1>
              <p className="text-lg font-semibold text-white leading-[1.5]">
                Faça download do nosso app e facilite o seu dia a dia.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Image
                src="/assets/svgs/apple-store.svg"
                width={206}
                height={61}
                alt="apple-store"
              />
              <Image
                src="/assets/svgs/google-store.svg"
                width={206}
                height={61}
                alt="google-store"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
