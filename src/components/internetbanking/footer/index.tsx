import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-166649 flex items-center flex-none py-8 px-2 max-[1205px]:py-4">
      <div className="w-full max-w-[1250px] mx-auto flex flex-wrap items-center gap-4 justify-center">
        <a
          href="https://novounicredinternet.e-unicred.com.br/unicred-internetbanking/preLogin/Seguranca"
          target="_blank"
          className="text-white font-normal text-sm hover:underline"
        >
          Segurança
        </a>
        <a
          href="https://novounicredinternet.e-unicred.com.br/unicred-internetbanking/preLogin/RedeAtendimento"
          target="_blank"
          className="text-white font-normal text-sm hover:underline"
        >
          Rede de atendimento
        </a>
        <a
          href="https://novounicredinternet.e-unicred.com.br/unicred-internetbanking/preLogin/Ouvidoria"
          target="_blank"
          className="text-white font-normal text-sm hover:underline"
        >
          Ouvidoria
        </a>
        <a
          href="https://www.unicred.com.br/atendimento/sac"
          target="_blank"
          className="text-white font-normal text-sm hover:underline"
        >
          SAC
        </a>
        <div className="w-[2px] bg-white h-[14px] max-[830px]:hidden"></div>
        <p className="text-white font-normal text-sm text-center">
          Central de Relacionamento: 3003 7703 (Capitais e regiões
          metropolitanas)
        </p>
        <p className="text-white font-normal text-sm text-center">
          <FaWhatsapp
            size={18}
            fill="#fff"
            className="inline-block mr-2 mb-1"
          />
          <span className="font-bold">0800 200 7302</span> (Demais regiões e
          atendimento WhatsApp)
        </p>
      </div>
    </footer>
  );
}
