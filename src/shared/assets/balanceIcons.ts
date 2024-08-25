import rubIcon from './rub-icon.jpeg';
import usdIcon from './usd-icon.png';
import eurIcon from './eur-icon.png';
import depositIcon from './deposit-icon.png';
import savingsIcon from './saving-icon.png';

export enum BalanceType {
  RUB = 'RUB',
  USD = 'USD',
  EUR = 'EUR',
  DEPOSIT = 'DEPOSIT',
  SAVINGS = 'INVEST',
}

export const balanceIcons = {
  [BalanceType.RUB]: rubIcon,
  [BalanceType.USD]: usdIcon,
  [BalanceType.EUR]: eurIcon,
  [BalanceType.DEPOSIT]: depositIcon,
  [BalanceType.SAVINGS]: savingsIcon,
};
