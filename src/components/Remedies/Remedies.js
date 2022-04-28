import React, { lazy, Suspense } from 'react'
import Breadcrumb from '../common/Breadcrumb';
import { useTranslation } from "react-i18next";
import RemedyList from './RemedyList';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const PlanetListLazy = lazy(() => import('./PlanetList'));
const GemsAndStoneListLazy = lazy(() => import('./GemsAndStoneList'));
const RudrakshaListLazy = lazy(() => import('./RudrakshaList'));
export default function Remedies() {
    const { t } = useTranslation();
    const breadcrumbOption = [
        { name: t('home'), link: "/Home" },
        { name: `${t('remedies')}`, isActive: false }];
    return (
        <>
            <Breadcrumb option={breadcrumbOption}></Breadcrumb>
            <div className='planet-banner'>
                <LazyLoadImage className='fishes' src='/images/404-1.png' alt='round'
                    ></LazyLoadImage>
                <LazyLoadImage className='fish' src='/images/sadhu.png' alt='sadhu'
                    ></LazyLoadImage>
                {/* <img className='fishes' src='/images/404-1.png'></img> */}
                {/* <img className='fish' src='/images/sadhu.png'></img> */}
            </div>
            <div className='horo-heading planet-header'>
                {t('astrological')} {t('remedies')}
            </div>
            <div className='row row-cols-1 row-cols-md-2'>
                <div className='col col-md-8'>
                    <div className='rem-heading'>
                        {t('remedies')}
                    </div>
                    <p className='rem-para'>
                        As humans, we all yearn for a life without problems, worries, and suffering. Unfortunately, in spite of being careful and disciplined, we end up doing things we are not supposed to. We fail to realize that we are also liable to be exposed to trials, temptations, mistakes, misunderstanding and unknowingly do wrong irrespective of age. It is said that the fault in our stars and the ill-effect of planets on our lives often make us do things, which is opposite to our personality and trait.
                    </p>
                    <p className='rem-para'>
                        At such a state they think they can perform some magic with astrology and get rid of all the problems.People have a lot of misconceptions related to astrology. They think the remedy to problems according to astrology is sitting for hours in the temple, doing tedious poojas or even showering money on idols and temples.There are endless types of problems in each one’s life. Some face continuous hardships, while some have specific problems etc. By now we should understand that problems are a part of our lives. We need to know how to deal with such difficulties rather than give up. Sometimes, even rigorous efforts fail to provide a solution or remedy. It is then when you need a helping hand that can help you sail through such troubled times.
                    </p>

                    <div className='rem-heading'>
                        {t('whatIsword', { word: `${t('astrological')} ${t('remedies')}` })}
                    </div>
                    <p className='rem-para'>
                        Astrological remedies are antidotes which nullify the negative impact of planets or any other element in your life. Remember astrological remedies will not fully take away the pain from your life instead, it will provide ease and relief from its impact.
                        Surprisingly, astrology does not only predict aspects of life about destiny, but it can also actually help to revamp life and treat the troubled sections.
                    </p>
                    <p className='rem-para'>
                        In astrology, it is all about time. One has to understand that it is inevitable to do and wear the right thing at the right time. A lot of people expect astrology and astrologers to wipe out the problem from the root completely. Unfortunately, they are humans too and cannot change the destiny of a person. They can only provide guidance, track problems, analyze its effect and help resolve them to ease its effect in your life.
                        Another myth amongst people is that one remedy can work for all. No! Since each person has a unique birth chart, similarly the frequency of problems, type of problem, planetary position and its effect differs from person to person.
                        Astrology accesses into the deeper layers of your personality, conscious and know about the weak aspects, where you need astrological assistance and remedy.
                    </p>
                    <div className='rem-heading'>
                        {t('aAndB', { a: t('remedy'), b: t('karma') })}
                    </div>
                    <p className='rem-para'>
                        Karma plays an important role in the universe. Not just in astrology in any study and belief karma is the nucleus. One’s deeds in the past and present lay the foundation of the future. Your present life and events are a result of your past deeds of which you are unaware. It is a vicious circle that goes on until your score is settled with Karma.
                    </p>
                    <div className='rem-heading'>
                        {t('typesOf', { word: t('remedies') })}
                    </div>

                    <RemedyList></RemedyList>


                    <div className='rem-heading'>
                        3 Points to remember when opting for any astrological remedy
                    </div>
                    <p className='rem-para'>
                        You cannot practice any remedy anytime. There is a specific time, method and purpose of remedy. So make sure you consult the right astrologer before in hand.
                        A remedy is for a specific individual, it should be performed by the person itself then only it works. No one can perform on anyone’s behalf.
                        One must not expect an instant result from any remedy. It takes time to show the result. You need to be patient.
                        Any practice or remedy that you opt should be done wholeheartedly. Otherwise, there is no use.
                        Astrologers or astrological remedies are not destiny changers. They only help you understand life and take precautions at the right time.
                        Explore Astrological remedies with Astroyogi by expert astrologers to attain prosperity and positivity in life.
                    </p>
                </div>
                <div className='col col-md-4'>
                    <Suspense fallback={<Skeleton count={10}></Skeleton>}>
                        <PlanetListLazy option={{ displayHeader: true, headerText: `${t("planetery")} ${t('ka')} ${t("remedies")}`, class: 'col planet-border' }}></PlanetListLazy>
                    </Suspense>
                    <Suspense fallback={<Skeleton count={10}></Skeleton>}>
                        <RudrakshaListLazy option={{ displayHeader: true, headerText: `${t("rudraksh")} ${t("remedies")}`, class: 'col planet-border' }}></RudrakshaListLazy>
                    </Suspense>
                    <Suspense fallback={<Skeleton count={10}></Skeleton>}>
                        <GemsAndStoneListLazy option={{ displayHeader: true, headerText: `${t("gemstones")} ${t("remedies")}`, class: 'col planet-border' }}></GemsAndStoneListLazy>
                    </Suspense>


                </div>
            </div>
        </>
    )
}
