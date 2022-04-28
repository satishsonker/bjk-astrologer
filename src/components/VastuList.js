import React from 'react'
import '../css/components/HoroscopeDaily.css';
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function VastuList() {
    const { t } = useTranslation();
    return (
        <div className='kun-box'>
            <div className='kun-box-header'>
                <LazyLoadImage alt='Vastu Banner' src='/images/vastu-banner.jpg'></LazyLoadImage>
                <div className='ast-tag-line'>
                    {t("knowAboutYourVastu")}
                </div></div>
            <div className='horo-yearly'>
                <ul>
                    <li><a href="/vastu/home">{t("vastu")} {t("forHome")}</a> </li>
                    <li><a href="/vastu/house">{t("vastu")} {t("forNewHouse")}</a> </li>
                    <li><a href="/vastu/office">{t("vastu")} {t("forOffice")}</a> </li>
                    <li><a href="/vastu/factory">{t("vastu")} {t("forFactory")}</a> </li>
                    <li><a href="/vastu/bathroom">{t("vastu")} {t("forBathroom")}</a> </li>
                    <li><a href="/vastu/kitchen">{t("vastu")} {t("forKitchen")}</a> </li>
                    <li><a href="/vastu/study-room">{t("vastu")} {t("forStudyRoom")}</a> </li>
                    <li><a href="/vastu/pooja-room">{t("vastu")} {t("forPoojaRoom")}</a> </li>
                    <li><a href="/vastu/shop">{t("vastu")} {t("forShop")}</a> </li>
                    <li><a href="/vastu/dining-room">{t("vastu")} {t("forDiningRoom")}</a> </li>
                    <li><a href="/vastu/guest-room">{t("vastu")} {t("forGuestRoom")}</a> </li>
                    <li><a href="/vastu/children-room">{t("vastu")} {t("forChildrenRoom")}</a> </li>
                    <li><a href="/vastu/career">{t("vastu")} {t("forCareer")}</a> </li>
                    <li><a href="/vastu/married-life">{t("vastu")} {t("forMarriageLife")}</a> </li>
                    <li><a href="/vastu/health">{t("vastu")} {t("forHealth")}</a> </li>
                    <li><a href="/vastu/colors-for-home">{t("vastu")}  {t("colorForHome")}</a> </li>
                    <li><a href="/vastu/positive-energy">{t("vastu")} {t("forPositiveEnergy")}</a> </li>
                    <li><a href="/vastu/business">{t("vastu")} {t("forBusiness")}</a> </li>
                    <li><a href="/vastu/plants-trees">{t("vastu")} {t("forPlants")}</a> </li>
                    <li><a href="/vastu/happiness ">{t("vastu")} {t("forHappiness")}</a> </li>
                    <li><a href="/vastu/peace">{t("vastu")} {t("forPeace")}</a> </li>
                    <li><a href="/vastu/wealth">{t("vastu")} {t("forWealth")}</a> </li>
                </ul>
            </div>
        </div>
    )
}