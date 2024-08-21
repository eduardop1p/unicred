import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-stay':
          'linear-gradient(to right,rgba(0,0,0,.65) 0,rgba(0,0,0,0) 100%)',
        'gradient-footer': 'linear-gradient(135deg,#f8f8f8 1%,#ebedee 100%)',
      },
      colors: {
        '004b35': '#004b35',
        '808080': '#808080',
        '555555': '#555555',
        b39f57: '#b39f57',
        '018b6a': '#018b6a',
        bba756: '#bba756',
        a79450: '#a79450',
        '555': '#555',
        '959595': '#959595',
        c4c4c4: '#c4c4c4',
        ce5563: '#ce5563',
        '017e5f': '#017e5f',
        '979797': '#979797',
        e4e4e4: '#e4e4e4',
        fffffff2: '#fffffff2',
        '818181': '#818181',
        eceeef: '#eceeef',
        '008d6a': '#008d6a',
        f8f8f8: '#f8f8f8',
        '166649': '#166649',
        '285148': '#285148',
        '999': '#999',
        '0006': '#0006',
        f5f5f5: '#f5f5f5',
        '267d5c': '#267d5c',
        '00000099': '#00000099',
        ddd: '#ddd',
        '5e5e47': '#5e5e47',
        '666': '#666',
        '43a376': '#43a376',
        b55755: '#b55755',
        ececec: '#ececec',
        ccc: '#ccc',
        C4C4C4: '#C4C4C4',
      },
      boxShadow: {
        'input-focus': 'inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #e5a4ac',
        'modal-error': '0 5px 15px rgba(0,0,0,.5)',
        'recovery-password': '0 0 0 .375em rgba(143,155,179,.16)',
        'input-password': 'inset 0 1px 1px rgba(0,0,0,.075)',
      },
      height: {
        c1: 'calc(100vh - 120px)',
        c2: 'calc(100% - 44px)',
        c3: 'calc(100% - 69px)',
      },
      fontFamily: {
        'pt-sans': ['var(--pt-sans)'],
      },
    },
  },
  plugins: [],
};
export default config;
