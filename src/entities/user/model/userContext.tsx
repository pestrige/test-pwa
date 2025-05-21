import { createContext, FC, PropsWithChildren, useCallback, useContext, useState } from 'react';
import { UserBalance, UserIcon, UserInfo, UserType } from './userTypes.ts';
import { userBalances, userIcons, userInfo } from './userConstants.ts';

type UserContextType = {
  type: UserType;
  balance: UserBalance;
  icon: UserIcon;
  info: UserInfo;
};

const UserContext = createContext<UserContextType | null>(null);
const UserSetContext = createContext<(user: UserType | null) => void>(() => {});

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [context, setContext] = useState<UserContextType | null>(null);

  const handleSetUser = useCallback((userType: UserType | null) => {
    if (!userType) {
      setContext({} as UserContextType);
      return;
    }
    const balance = userBalances[userType];
    const icon = userIcons[userType];
    const info = userInfo[userType];

    setContext({ type: userType, balance, icon, info });
  }, []);

  return (
    <UserContext.Provider value={context}>
      <UserSetContext.Provider value={handleSetUser}>{children}</UserSetContext.Provider>
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const user = useContext(UserContext);
  return user ? user : ({} as UserContextType);
};
export const useUserSetContext = () => useContext(UserSetContext);
