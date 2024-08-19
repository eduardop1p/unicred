import Image from 'next/image';

import BrlVariationProtocol from '@/interfaces/brlVariationProtocol';
import IbovVariationProtocol from '@/interfaces/ibovVariationProtocol';
import formatPrice from '@/services/formatPrice';

interface Props {
  euro: BrlVariationProtocol | null;
  usd: BrlVariationProtocol | null;
  ibov: IbovVariationProtocol | null;
}

export default function StayInside({ euro, usd, ibov }: Props) {
  const itemsGrid1 = [
    {
      href: 'https://unicred.com.br/fique-por-dentro/informativos/unicred-celebra-35-anos-se-reafirmando-como-a-instituicao-financeira-cooperativa-especialista-no-ecossistema-da-saude-',
      imgSrc: '/assets/imgs/stay-inside/img1.jpg',
      title: 'Informativos',
      date: '10/08/24',
      description:
        'Unicred celebra 35 anos se reafirmando como a instituição financeira cooperativa especialista no ecossistema da saúde',
    },
    {
      href: 'https://unicred.com.br/fique-por-dentro/mercado-financeiro/ipca-de-julho-fica-acima-das-expectativas-com-resultado-de-038',
      imgSrc: '/assets/imgs/stay-inside/img2.jpg',
      title: 'Mercado Financeiro',
      date: '09/08/24',
      description:
        'IPCA de julho fica acima das expectativas com resultado de 0,38%',
    },
  ];

  const itemsGrid2 = [
    {
      href: 'https://unicred.com.br/fique-por-dentro/noticias/dicas-de-educacao-financeira-de-pais-para-filhos',
      imgSrc: '/assets/imgs/stay-inside/img3.webp',
      title: 'Notícias',
      date: '06/08/24',
      description: 'Dicas de educação financeira de pais para filhos',
    },
    {
      href: 'https://unicred.com.br/fique-por-dentro/campanhas/unicred-visa-o-cartao-que-torna-o-dia-dos-pais-ainda-mais-especial',
      imgSrc: '/assets/imgs/stay-inside/img4.webp',
      title: 'Campanhas',
      date: '06/08/24',
      description:
        'Unicred Visa: O cartão que torna o Dia dos Pais ainda mais especial',
    },
  ];

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="grid grid-cols-[370px,1fr] w-full gap-[10px]">
        {itemsGrid1.map((item, i) => (
          <a
            href={item.href}
            target="_blank"
            key={i}
            className="w-full h-full flex flex-col group overflow-hidden"
          >
            <div className="overflow-hidden w-full h-[250px] flex-none relative before:absolute before:content-[''] before:w-full before:h-full before:bg-gradient-stay before:z-[5]">
              <Image
                src={item.imgSrc}
                sizes="100%"
                fill
                alt={item.title}
                className="object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="flex flex-col gap-1 border-x border-b border-solid border-eceeef p-[30px] h-full">
              <h2 className="uppercase text-sm font-semibold text-bba756">
                {item.title}
              </h2>
              <span className="text-xs font-normal text-979797">
                {item.date}
              </span>
              <p className="text-[21px] text-555 font-bold">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
      <div className="grid grid-cols-3 w-full gap-[10px]">
        {itemsGrid2.map((item, i) => (
          <a
            href={item.href}
            target="_blank"
            key={i}
            className="w-full h-full flex flex-col group overflow-hidden"
          >
            <div className="overflow-hidden w-full h-[250px] flex-none relative before:absolute before:content-[''] before:w-full before:h-full before:bg-gradient-stay before:z-[5]">
              <Image
                src={item.imgSrc}
                sizes="100%"
                fill
                alt={item.title}
                className="object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="flex flex-col gap-1 border-x border-b border-solid border-eceeef p-[30px] h-full">
              <h2 className="uppercase text-sm font-semibold text-bba756">
                {item.title}
              </h2>
              <span className="text-xs font-normal text-979797">
                {item.date}
              </span>
              <p className="text-[21px] text-555 font-bold">
                {item.description}
              </p>
            </div>
          </a>
        ))}
        <div className="w-full h-full p-2 flex flex-col border border-solid border-eceeef">
          <h2 className="flex items-center justify-center text-bba756 text-lg font-bold mt-5 mb-4 w-full">
            INDICADORES
          </h2>
          <table className="w-full mb-4">
            <tbody className="w-full">
              <tr className="w-full bg-f8f8f8 h-[50px]">
                <td className="text-808080 font-semibold p-3 text-[15px] text-left">
                  IPCA (mês)
                </td>
                <td className="text-808080 font-semibold p-3 text-[15px] text-left">
                  0.38%
                </td>
                <td className="text-808080 font-semibold p-3 text-[15px] text-left">
                  -
                </td>
              </tr>
              {euro && (
                <tr className="w-full bg-white h-[50px]">
                  <td className="text-808080 font-semibold p-3 text-[15px]">
                    Euro
                  </td>
                  <td className="text-808080 font-semibold p-3 text-[15px]">
                    {euro.variation}%
                  </td>
                  <td className="text-808080 font-semibold p-3 text-[15px]">
                    {formatPrice(+euro.price)}
                  </td>
                </tr>
              )}
              {usd && (
                <tr className="w-full bg-f8f8f8 h-[50px]">
                  <td className="text-808080 font-semibold p-3 text-[15px]">
                    Dolar Comercial
                  </td>
                  <td className="text-808080 font-semibold p-3 text-[15px]">
                    {usd.variation}%
                  </td>
                  <td className="text-808080 font-semibold p-3 text-[15px]">
                    {formatPrice(+usd.price)}
                  </td>
                </tr>
              )}
              <tr className="w-full bg-white h-[50px]">
                <td className="text-808080 font-semibold p-3 text-[15px]">
                  IPCA (acum. ano)
                </td>
                <td className="text-808080 font-semibold p-3 text-[15px]">
                  4.50% a.a
                </td>
                <td className="text-808080 font-semibold p-3 text-[15px]">-</td>
              </tr>
              {ibov && (
                <tr className="w-full bg-f8f8f8 h-[50px]">
                  <td className="text-808080 font-semibold p-3 text-[15px]">
                    Ibovespa
                  </td>
                  <td className="text-808080 font-semibold p-3 text-[15px]">
                    {ibov.variation}
                  </td>
                  <td className="text-808080 font-semibold p-3 text-[15px]">
                    {ibov.price}(pts)
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <button
            type="button"
            className="hover:bg-c4c4c4 hover:text-white transition-colors duration-300 bg-transparent w-[95px] h-[35px] text-xs uppercase text-979797 border border-solid border-c4c4c4 rounded-[3px] flex items-center justify-center"
          >
            Saiba mais
          </button>
        </div>
      </div>
    </div>
  );
}
