import React from 'react'
import NotifyList from './NotifyList'
import '../../css/components/common/Notifications.css';
import Breadcrumb from '../common/Breadcrumb';
import { useTranslation } from "react-i18next";

export default function NotifyPage() {
  const { t } = useTranslation();
  const breadcrumbOption = [
    { name: t('home'), link: "/Home" },
    { name: `${t('notification')}`, isActive: false }];
  return (
    <>
      <Breadcrumb option={breadcrumbOption}></Breadcrumb>
      <div className='noti-page-container'>
        <NotifyList></NotifyList>
      </div>
    </>
  )
}
