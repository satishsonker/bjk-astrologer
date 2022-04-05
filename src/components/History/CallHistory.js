import React from 'react';
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common/Breadcrumb';

export default function CallHistory() {
    const { t } = useTranslation();
    const breadcrumbOption = [
    { name: t('home'), link: "/Home" },
    { name: `${t('call')} ${t('history')}`, isActive: false }];
  return (
    <>
    <Breadcrumb option={breadcrumbOption}></Breadcrumb>
    </>
  )
}
