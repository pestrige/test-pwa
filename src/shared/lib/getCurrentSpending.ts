import { formatPrice } from './formatPrice.ts';

const getCurrentMonth = () => {
  return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date());
};

export const getCurrentSpending = (spent: number) => {
  const month = getCurrentMonth();
  const price = formatPrice(spent);

  return `${price} spent in ${month}`;
};

export const getCurrentDeposit = (deposit?: number) => {
  const month = getCurrentMonth();
  if (!deposit) {
    return `No deposits in ${month}`;
  }

  const price = formatPrice(deposit);
  return `${price} deposited in ${month}`;
};

export const getCurrentCredited = () => {
  const month = getCurrentMonth();
  return `To be credited in ${month}`;
};
