import React from 'react';
import { useTranslation } from "react-i18next";
import Breadcrumb from './common/Breadcrumb';

export default function UserProfile() { 
    const { t } = useTranslation();
    const breadcrumbOption = [
    { name: t('home'), link: "/Home" },
    { name: `${t('users')} ${t('profile')}`, isActive: false }
];
  return (
    <>
    <Breadcrumb option={breadcrumbOption}></Breadcrumb>
    </>
  )
}
