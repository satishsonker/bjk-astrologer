import React from 'react';
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common/Breadcrumb';

export default function RechargeHistory() {
    const { t } = useTranslation();
    const breadcrumbOption = [
    { name: t('home'), link: "/Home" },
    { name: `${t('recharge')} ${t('history')}`, isActive: false }];
  return (
    <>
    <Breadcrumb option={breadcrumbOption}></Breadcrumb>
    </>
  )
}
