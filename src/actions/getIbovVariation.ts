'use server';

import IbovVariationProtocol from '@/interfaces/ibovVariationProtocol';

export default async function getIbovVariation(): Promise<IbovVariationProtocol | null> {
  try {
    const res = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=BOVA11.SA&apikey=4SPEN5WGM54THRZ0`,
      {
        method: 'GET',
        cache: 'no-cache',
      }
    );
    let data = await res.json();
    const price = data['Global Quote']['05. price'];
    const variation = data['Global Quote']['10. change percent'];
    return {
      price,
      variation,
    };
  } catch (err) {
    console.log(err);
    return null;
  }
}
