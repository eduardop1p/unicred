'use server';

import BrlVariationProtocol from '@/interfaces/brlVariationProtocol';

interface Props {
  currencyPair: string;
}

export default async function getBrlVariation({
  currencyPair,
}: Props): Promise<BrlVariationProtocol | null> {
  try {
    const res = await fetch(
      `https://economia.awesomeapi.com.br/json/last/${currencyPair}`,
      {
        method: 'GET',
        cache: 'no-cache',
      }
    );
    let data = await res.json();
    currencyPair = currencyPair.replaceAll('-', '');
    data = data[currencyPair];
    return {
      price: data.ask,
      variation: data.varBid,
    };
  } catch (err) {
    console.log(err);
    return null;
  }
}
