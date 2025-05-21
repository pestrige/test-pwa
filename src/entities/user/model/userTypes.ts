export type UserType = 'asya' | 'dima';

export type UserInfo = {
  shortName: string;
  fullName: string;
  phone: string;
  id: string;
  valid: string;
};

export type UserIcon = {
  compact: string;
  regular: string;
};

export type UserBalance = {
  spent: number;
  black: number;
  deposit: number;
  platinum: number;
  savings: number;
};
