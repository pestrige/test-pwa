import { FC } from 'react';
import { ProfileCard, useUserContext, useUserSetContext } from '../../entities/user';
import { DarkBox, DocCard, Scrollable, ShadowBox } from '../../shared/ui';
import passportIcon from '../../shared/assets/passport-icon.jpg';
import innIcon from '../../shared/assets/inn-icon.jpg';
import { BackButton } from '../../shared/layout/BackButton.tsx';
import cls from './profilePage.module.css';

export const ProfilePage: FC = () => {
  const { info } = useUserContext();
  const setUser = useUserSetContext();

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Scrollable className={cls.root}>
      <div className={cls.header}>
        <BackButton />
        <ProfileCard />
      </div>

      <ShadowBox>
        <p className={cls.title}>Profile</p>
        <p className={cls.info}>
          Name: <span>{info.fullName}</span>
        </p>
        <p className={cls.info}>
          Phone: <span>{info.phone}</span>
        </p>
        <p className={cls.info}>
          Passport ID: <span>{info.id}</span>
        </p>
        <p className={cls.info}>
          Passport Valid From: <span>{info.valid}</span>
        </p>
      </ShadowBox>

      <DarkBox className={cls.docsBox}>
        <p className={cls.title}>Documents</p>
        <div className={cls.docs}>
          <DocCard title="Passport" subtitle={info.fullName} icon={passportIcon} />
          <DocCard title="INN" icon={innIcon} />
        </div>
      </DarkBox>

      <ShadowBox>
        <p className={cls.title}>Extras</p>
        <p className={cls.infoTiny}>
          Contact Bank <span>&gt;</span>
        </p>
        <p className={cls.infoTiny}>
          Licenses and terms <span>&gt;</span>
        </p>
        <p className={cls.infoTiny}>
          Version <span>7.9.3</span>
        </p>
      </ShadowBox>

      <DarkBox onClick={handleLogout} className={cls.logout}>
        Log out
      </DarkBox>
    </Scrollable>
  );
};
