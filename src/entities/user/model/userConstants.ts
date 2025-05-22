import { UserType, UserBalance, UserIcon, UserInfo } from './userTypes.ts';
import dimaIcon from '../../../shared/assets/user-dima-icon.jpeg';
import dimaXlIcon from '../../../shared/assets/user-dima-icon-xl.jpg';
import asyaIcon from '../../../shared/assets/user-asya-icon.jpg';
import asyaXlIcon from '../../../shared/assets/user-asya-icon-xl.jpg';

export const userInfo: Record<UserType, UserInfo> = {
  asya: {
    shortName: 'ASIA',
    fullName: 'ASIA KOROVINA',
    phone: '+7 938 475 1575',
    id: '66 3886908',
    valid: '23.08.2027',
    accountNumber: '42303156800004693851',
  },
  dima: {
    shortName: 'DMITRII',
    fullName: 'DMITRII KOROVIN',
    phone: '+7 921 765 5935',
    id: '76 8639381',
    valid: '07.09.2032',
    accountNumber: '42303156800004693851',
  },
};

export const userIcons: Record<UserType, UserIcon> = {
  asya: {
    compact: asyaIcon,
    regular: asyaXlIcon,
  },
  dima: {
    compact: dimaIcon,
    regular: dimaXlIcon,
  },
};

export const userBalances: Record<UserType, UserBalance> = {
  asya: {
    spent: 115765,
    black: 58461.08,
    deposit: 1_800_000,
    platinum: 280_000,
    savings: 500_000,
  },
  dima: {
    spent: 251584,
    black: 42953.12,
    deposit: 2_697_030,
    platinum: 320_000,
    savings: 500_000,
  },
};
