import { MdKeyboardArrowRight } from 'react-icons/md';

interface Props {
  title: string;
  data: { href?: string; title: string }[];
}

export default function Menu({ title, data }: Props) {
  return (
    <div className="flex flex-col">
      <h2 className="mb-5 text-[15px] font-semibold text-004b35 uppercase leading-[1.1]">
        {title}
      </h2>
      <div className="flex flex-col gap-3 w-fit">
        {data.map((item, i) => (
          <div key={i} className="flex items-center gap-1 cursor-pointer">
            <MdKeyboardArrowRight size={15} className="fill-555 flex-none" />
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                className="text-sm font-normal text-555 hover:font-bold hover:text-bba756 transition-all duration-200"
              >
                {item.title}
              </a>
            ) : (
              <h2 className="text-sm font-normal text-555 hover:font-bold hover:text-bba756 transition-all duration-200">
                {item.title}
              </h2>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
