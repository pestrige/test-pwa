import { formatPrice } from './formatPrice.ts';

export const getCurrentSpending = (spent: number) => {
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date());
  const price = formatPrice(spent);

  return `${price} spent in ${month}`;
};
