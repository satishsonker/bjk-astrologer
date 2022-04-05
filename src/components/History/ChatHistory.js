import React from 'react';
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common/Breadcrumb';

export default function ChatHistory() {
    const { t } = useTranslation();
    const breadcrumbOption = [
    { name: t('home'), link: "/Home" },
    { name: `${t('chat')} ${t('history')}`, isActive: false }];
  return (
    <>
    <Breadcrumb option={breadcrumbOption}></Breadcrumb>
    </>
  )
}
