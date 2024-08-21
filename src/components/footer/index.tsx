import MenuSocialMidia from '../header/nav/menuSocialMidia';
import Menu from './menu';

export default function Footer() {
  const menu1 = {
    title: 'a Unicred',
    data: [
      {
        title: 'Institucional',
      },
      {
        title: 'Soluções',
      },
      {
        title: 'Fique por dentro',
        href: 'https://unicred.com.br/fique-por-dentro',
      },
      {
        title: 'Associe-se',
        href: 'https://unicred.com.br/associe-se',
      },
      {
        title: 'Trabalhe Conosco',
        href: 'https://unicredbr.gupy.io/',
      },
    ],
  };

  const menu2 = {
    title: 'Facilidades',
    data: [
      {
        title: 'Segurança',
        href: 'https://unicred.com.br/seguranca',
      },
      {
        title: 'Consulta de Cheques',
        href: 'https://unicred.com.br/solucoes/consulta-de-cheques',
      },
      {
        title: 'Canais Digitais',
        href: 'https://unicred.com.br/atendimento/canais-digitais',
      },
      {
        title: 'Mapa do Site',
        href: 'https://unicred.com.br/mapa-do-site',
      },
    ],
  };

  const menu3 = {
    title: 'Ajuda',
    data: [
      {
        title: 'Informações Úteis',
        href: 'https://unicred.com.br/informacoes-uteis',
      },
      {
        title: 'Links Úteis',
        href: 'https://unicred.com.br/links-uteis',
      },
      {
        title: 'Rede de Relacionamento',
        href: 'https://unicred.com.br/atendimento/rede-de-relacionamento',
      },
      {
        title: 'Encontre uma agência',
        href: 'https://unicred.com.br/atendimento/encontre-uma-agencia',
      },
      {
        title: 'Dúvidas Frequentes',
        href: 'https://unicred.com.br/atendimento/duvidas-frequentes',
      },
      {
        title: 'Código de Defesa do Consumidor',
        href: 'https://www.planalto.gov.br/ccivil_03/Leis/L8078compilado.htm',
      },
      {
        title: 'Política de Privacidade',
        href: 'https://unicred.com.br/politica-de-privacidade',
      },
      {
        title: 'Informações de Acesso',
        href: 'http://netinfo.unicred.com.br/',
      },
    ],
  };

  return (
    <footer className="w-full bg-f8f8f8 py-[70px] px-5 bg-gradient-footer max-[570px]:py-[35px]">
      <div className="w-full max-w-[1140px] mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-8">
          <div className="flex flex-col">
            <Menu {...menu1} />
            <p className="text-base font-normal text-555 mt-4">
              Instituição Financeira
            </p>
            <p className="text-base font-normal text-555">
              número: <span className="font-bold">136</span>
            </p>
          </div>
          <Menu {...menu2} />
          <Menu {...menu3} />
          <div className="flex flex-col">
            <h2 className="mb-5 text-[15px] font-semibold text-004b35 uppercase leading-[1.1]">
              FALE COM A UNICRED
            </h2>
            <h2 className="mb-5 text-[15px] font-semibold text-004b35 uppercase leading-[1.1]">
              Central de Relacionamento
            </h2>
            <p className="text-[15px] text-555 font-normal">
              Atendimento 24h por dia no chat disponível no aplicativo Unicred
              Mobile e no Internet Banking.
            </p>
            <div className="flex flex-col my-4 gap-1">
              <p className="text-sm text-555 font-normal">
                3003 7703 -{' '}
                <span className="font-bold">
                  capitais e regiões metropolitanas
                </span>
              </p>
              <p className="text-sm text-555 font-normal">
                0800 200 7302 -{' '}
                <span className="font-bold">demais regiões</span>
              </p>
              <p className="text-sm text-555 font-normal">
                +55 11 3003-7703 –{' '}
                <span className="font-bold">no exterior</span>
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=5508002007302&text=Bom%20dia!%20Tudo%20bem?%20preciso%20de%20ajuda"
                target="_blank"
                className="text-004b35 font-normal text-sm hover:underline"
              >
                Falar por WhatsApp
              </a>
            </div>
            <a
              href="https://unicred.com.br/home/atendimento/sac"
              target="_blank"
              className="mb-4 text-[15px] font-semibold text-004b35 uppercase leading-[1.1] hover:text-bba756 hover:underline"
            >
              Sac
            </a>
            <p className="text-[15px] text-555 font-normal mb-4">
              Esclarecimento de dúvidas, contribuição com sugestões,
              reclamações, cancelamento de serviços e elogios.
            </p>
            <p className="text-sm text-555 font-normal mb-4">
              Ligue: <span className="font-bold">0800 647 2930</span>
            </p>
            <a
              href="https://unicred.com.br/home/atendimento/ouvidoria"
              target="_blank"
              className="mb-4 text-[15px] font-semibold text-004b35 uppercase leading-[1.1] hover:text-bba756 hover:underline"
            >
              Ouvidoria
            </a>
            <p className="text-[15px] text-555 font-normal mb-4">
              É um canal voltado a comunicação e mediação entre a Unicred e seus
              cooperados, relativos a manifestações de última instância
              envolvendo nossos serviços e produtos.
            </p>
            <p className="text-sm text-555 font-normal mb-4">
              Ligue: <span className="font-bold">0800 940 0602</span>
            </p>
            <h2 className="text-[15px] font-semibold text-004b35 leading-[1.1] hover:text-bba756 hover:underline">
              Canal de Ética
            </h2>
          </div>
        </div>
        <div className="bg-c4c4c4 h-[1px] w-full mt-[40px] mb-[30px]"></div>
        <div className="flex w-full justify-between gap-8 max-[500px]:flex-col">
          <div className="flex flex-col">
            <p className="text-[13px] font-normal text-979797">
              Unicred do Brasil- Av. Paulista, Nº 2300, 19° Andar, Conj. 192,
            </p>
            <p className="text-[13px] font-normal text-979797">
              Bela Vista, 01310-200 - São Paulo - SP
            </p>
            <p className="text-[13px] font-normal text-979797">
              Tel:{' '}
              <span className="font-bold">
                (011) 3355-3099 - (011) 3355-3083
              </span>
            </p>
          </div>
          <MenuSocialMidia />
        </div>
      </div>
    </footer>
  );
}
