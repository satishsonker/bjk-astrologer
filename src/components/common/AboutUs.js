import React from 'react'
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common/Breadcrumb';
import '../../css/components/common/common.css';

export default function () {
    const { t } = useTranslation();
    const breadcrumbOption = [
        { name: t('home'), link: "/Home" },
        { name: `${t('aboutUs')}`, isActive: false }];
    return (
        <>
            <Breadcrumb option={breadcrumbOption}></Breadcrumb>
            breadcrumbOptionbreadcrumbOptionbreadcrumbOptionbreadcrumbOptionbreadcrumbOptionbreadcrumbOptionbreadcrumbOptionbreadcrumbOptionbreadcrumbOption
        </>
    )
}
