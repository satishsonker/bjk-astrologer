import React, { useEffect } from 'react';
import '../../css/components/HoroscopeDailyPage.css';
import Breadcrumb from '../common/Breadcrumb';
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import AskQuestionBanner from '../Banner/AskQuestionBanner';
import PlanetList from './PlanetList';
import RudrakshaList from './RudrakshaList';
import GemsAndStoneList from './GemsAndStoneList';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function RudrakshaRemediesPage() {
    const { t } = useTranslation();
    const urlParam = useParams();
    const breadcrumbOption = [
        { name: t('home'), link: "/Home" },
        { name: `${t('remedies')}`, link: "/Remedies" },
        { name: ` ${t(urlParam.rudraksh)} - ${t('rudraksh')}  ${t('ka')} ${t('importance')}`, isActive: false }];
        
useEffect(() => {
  
   var section= document.getElementById("mukhi"+urlParam.rudraksh);
   if(section)
   {
       section.scrollIntoView(true);
   }

}, [])

    return (
        <>
            <Breadcrumb option={breadcrumbOption}></Breadcrumb>
            <div className='{t("planet")}-rotate'>
                <LazyLoadImage src={`/images/icons/${urlParam.rudraksh}mukhi.png`} alt={urlParam.rudraksh} />
            </div>
            <div className='horo-heading {t("planet")}-header'>
                {t(urlParam.rudraksh)} {!isNaN(parseInt(urlParam.rudraksh)) ? t('mukhi') : ""}  {t('rudraksh')} {t('ka')} {t('importance')}
            </div>
            <div className='row row-cols row-cols-md-3 rem-page'>
                <div className='col rem-page-part1'>
                    <div className='hflex'>
                        <div className='h-zodiac'>
                            <LazyLoadImage src={`/images/icons/${urlParam.rudraksh}mukhi.png`} alt={urlParam.rudraksh + "mukhi"} />
                        </div>
                        <div className='h-zodiac-period'>
                            <div>{t(urlParam.rudraksh)} {!isNaN(parseInt(urlParam.rudraksh)) ? t('mukhi') : ""} {t('rudraksh')}</div>
                            <div></div>
                        </div>
                    </div>
                    <p className='page-para'>
                        As mentioned in our previous article, {t("rudraksh")}  is comprised of two words Rudra, which is another name for Lord Shiva, and Aksha, which means teardrops. Hence, {t("rudraksh")}  means tears of Lord Shiva. It is said to have originated from the eyes of Lord Shiva in the form of tears that landed on earth and formed the {t("rudraksh")}  tree.
                    </p>
                    <p className='page-para'>
                        The {t("rudraksh")}  tree grows mostly in the Himalayan regions of India, Nepal, Sumatra, Java, Myanmar, and Indonesia.
                    </p>
                    <p className='page-para'>
                        However, there are different types of {t("rudraksh")}  beads that grow on the tree. They are based on the vertical lines seen running down on the surface. These lines are known as Mukhi, or in other words, “the clefts or furrows on the surface”. (For instance, if there are two vertical lines on the surface, then it is known as 2 {t("mukhi")} {t("rudraksh")} .)
                    </p>
                    <p className='page-para'>
                        Each {t("rudraksh")}  bead contains 50.031% carbon, 0.95% nitrogen, 17.897% hydrogen, 30.53% oxygen, and each bead takes 15 to 16 years to mature.
                    </p>
                    <p className='page-para'>
                        The {t("rudraksh")}  comes with different “Mukhis” or “Face”, ranging from 1 to 21 Faces. Among them, 1 to 14 Mukhis are commonly found. There are different types of {t("rudraksh")}  with more than 22 vertical lines, but they are extremely rare, and their properties haven’t been studied yet.
                    </p>
                    <p id='mukhi1' className='page-heading'>1 {t("mukhi")} {t("rudraksh")}</p>
                    <ul className='page-list'>
                        <li>{t("ruling")} {t("god")}: Shiva</li>
                        <li>{t("ruling")} {t("planet")}: All</li>
                        <li>{t("beeja")} {t("mantra")}: || {t("om")} {t("namah")} Shivaya ||</li>
                    </ul>
                    <p className='page-heading sub'>{t("benefitsOf",{word:`1 ${t("mukhi")} ${t("rudraksh")}`})}</p>
                    <ul className='page-list sub'>
                        <li>1 {t("mukhi")} {t("rudraksh")}  is ruled by Lord Shiva himself and is beneficial for attaining super consciousness.</li>
                        <li>Ek {t("mukhi")} {t("rudraksh")}  Has the capacity to destroy all sins and lead one to moksha</li>
                        <li>Elevation of awareness towards the absolute consciousness of the divine</li>
                        <li>Only a few selected ones who have been graced with Lord Shiva and divine karma gets to wear this rare 1 {t("mukhi")} {t("rudraksh")}  bead.</li>
                        <li>On a mental level, the mind shifts towards the supreme element known as Partattva Dharana cha jayate Tatprakashnam.</li>
                        <li>On a physical level, 1 {t("mukhi")} {t("rudraksh")}  helps to cure migraines and other mental diseases.</li>
                    </ul>

                    <p id='mukhi2' className='page-heading'>2 {t("mukhi")} {t("rudraksh")}</p>
                    <ul className='page-list'>
                        <li>{t("ruling")} {t("god")}: Ardhanareshwar</li>
                        <li>{t("ruling")} {t("planet")}: {t("moon")}</li>
                        <li>{t("beeja")} {t("mantra")}: || {t("om")} {t("namah")} ||</li>
                    </ul>
                    <p className='page-heading sub'>{t("benefitsOf",{word:`2 ${t("mukhi")} ${t("rudraksh")}`})}</p>
                    <ul className='page-list sub'>
                        <li>It represents two images of Shiva and Shakti. Thus, the wearer would be blessed with unity and harmony</li>
                        <li>It symbolizes Guru-Shishya, parents-children, husband-wife relationship</li>
                        <li>It maintains Oneness in the relationship</li>
                        <li>On a spiritual level, it removes the negative elements of the {t("planet")} moon.</li>
                        <li>On a physical level, it cures emotional instability, releases fear, insecurity, and gives inner happiness and fulfillment.</li>
                    </ul>

                    <p id='mukhi3' className='page-heading'>3 {t("mukhi")} {t("rudraksh")}</p>
                    <ul className='page-list'>
                        <li>{t("ruling")} {t("god")}: Agni</li>
                        <li>{t("ruling")} {t("planet")}: Sun</li>
                        <li>{t("beeja")} {t("mantra")}: || {t("om")} Kleem {t("namah")} ||</li>
                    </ul>
                    <p className='page-heading sub'>{t("benefitsOf",{word:`3 ${t("mukhi")} ${t("rudraksh")}`})}</p>
                    <ul className='page-list sub'>
                        <li>It symbolizes the fire {t("god")} Agnidev.</li>
                        <li>The three {t("mukhi")} {t("rudraksh")}  helps a person to free himself from the bondage of past birth, the karmas related to his path and then pave the way for success based on the karma of his current life.</li>
                        <li>The wearer of 3 {t("mukhi")} {t("rudraksh")}  doesn’t fall in the loop of the cycle of life; it means that he attains moksha after the current life.</li>
                        <li>On a mental level, the wearer is uplifted from low self-esteem so that he can rise to the illuminated pure self.</li>
                        <li>On a physical level, it heals stomach and liver ailments.</li>
                    </ul>

                    <p id='mukhi4' className='page-heading'>4 {t("mukhi")} {t("rudraksh")}</p>
                    <ul className='page-list'>
                        <li>{t("ruling")} {t("god")}: Brihaspati</li>
                        <li>{t("ruling")} {t("planet")}: {t("jupiter")}</li>
                        <li>{t("beeja")} {t("mantra")}: || {t("om")} Hreem {t("namah")} ||</li>
                    </ul>
                    <p className='page-heading sub'>{t("benefitsOf",{word:`4 ${t("mukhi")} ${t("rudraksh")}`})}</p>
                    <ul className='page-list sub'>
                        <li>4 {t("mukhi")} {t("rudraksh")}  is for those seeking the power of knowledge and creativity as wearing the rudraksha improves mental power, vocal power, wit, intelligence</li>
                        <li>The wear of four {t("mukhi")} {t("rudraksh")}  is also blessed with melodious speech.</li>
                    </ul>

                    <p id='mukhi5' className='page-heading'>5 {t("mukhi")} {t("rudraksh")}</p>
                    <ul className='page-list'>
                        <li>{t("ruling")} {t("god")}: Rudra Kalagni</li>
                        <li>{t("ruling")} {t("planet")}: {t("jupiter")}</li>
                        <li>{t("beeja")} {t("mantra")}: || {t("om")} Hreem {t("namah")} ||</li>
                    </ul>
                    <p className='page-heading sub'>{t("benefitsOf",{word:`5 ${t("mukhi")} ${t("rudraksh")}`})}</p>
                    <ul className='page-list sub'>
                        <li>5 {t("mukhi")} {t("rudraksh")}  is beneficial for those seeking to find their own higher selves, UpaGuru</li>
                        <li>Panch {t("mukhi")} {t("rudraksh")}  enhances awareness, memory, word power and intellect.</li>
                        <li>This type of {t("rudraksh")}  is mostly used while chanting mantras as it helps them to connect with the grace of Shiva more easily.</li>
                        <li>Pachmukhi {t("rudraksh")}  removes the wearer from the negative energy of {t("planet")} {t("jupiter")}.</li>
                    </ul>

                    <p id='mukhi6' className='page-heading'>6 {t("mukhi")} {t("rudraksh")}</p>
                    <ul className='page-list'>
                        <li>{t("ruling")} {t("god")}: Kartikeya</li>
                        <li>{t("ruling")} {t("planet")}: {t("mars")}</li>
                        <li>{t("beeja")} {t("mantra")}: || {t("om")} Hreem {t("hoom")}  {t("namah")} ||</li>
                    </ul>
                    <p className='page-heading sub'>{t("benefitsOf",{word:`6 ${t("mukhi")} ${t("rudraksh")}`})}</p>
                    <ul className='page-list sub'>
                        <li>It symbolizes stability and pacifies the {t("planet")} {t("mars")}.</li>
                        <li>The wearer is strengthened with willpower and focus as he gets free from mental lethargy, emotional instability.</li>
                        <li>This type of {t("rudraksh")}  is mostly used while chanting mantras as it helps them to connect with the grace of Shiva more easily.</li>
                        <li>The wearer is also blessed with luck for properties and vehicles</li>
                    </ul>

                    <p id='mukhi7' className='page-heading'>7 {t("mukhi")} {t("rudraksh")}</p>
                    <ul className='page-list'>
                        <li>{t("ruling")} {t("god")}: {t("laxmi")}</li>
                        <li>{t("ruling")} {t("planet")}: {t("venus")} </li>
                        <li>{t("beeja")} {t("mantra")}: || {t("om")} {t("hoom")}  {t("namah")} ||</li>
                    </ul>
                    <p className='page-heading sub'>{t("benefitsOf",{word:`7 ${t("mukhi")} ${t("rudraksh")}`})}</p>
                    <ul className='page-list sub'>
                        <li>It symbolizes health, wealth, and new opportunities.</li>
                        <li>For those suffering from financial and luck-related miseries, 7 {t("mukhi")} {t("rudraksh")}  is suitable.</li>
                        <li>The wearer progresses with name, fame, and abundance.</li>
                    </ul>

                    <p id='mukhi8' className='page-heading'>8 {t("mukhi")} {t("rudraksh")}</p>
                    <ul className='page-list'>
                        <li>{t("ruling")} {t("god")}: {t("laxmi")}</li>
                        <li>{t("ruling")} {t("planet")}: {t("venus")} </li>
                        <li>{t("beeja")} {t("mantra")}: || {t("om")} {t("hoom")}  {t("namah")} ||</li>
                    </ul>
                    <p className='page-heading sub'>{t("benefitsOf",{word:`8 ${t("mukhi")} ${t("rudraksh")}`})}</p>
                    <ul className='page-list sub'>
                        <li>8 Mukhi Rudraksha has the power to eliminate obstacles, evils in a person’s path to success</li>
                        <li>The person who wears it will be blessed with knowledge, wisdom, and wealth</li>
                    </ul>

                    <p id='mukhi9' className='page-heading'>9 {t("mukhi")} {t("rudraksh")}</p>
                    <ul className='page-list'>
                        <li>{t("ruling")} {t("god")}: {t("durga")}</li>
                        <li>{t("ruling")} {t("planet")}: {t("rahu")} </li>
                        <li>{t("beeja")} {t("mantra")}: || {t("om")} Hreem {t("hoom")}  {t("namah")} ||</li>
                    </ul>
                    <p className='page-heading sub'>{t("benefitsOf",{word:`9 ${t("mukhi")} ${t("rudraksh")}`})}</p>
                    <ul className='page-list sub'>
                        <li>9 Mukhi Rudraksha symbolizes energy, power, dynamism, fearlessness.</li>
                        <li>It gives two things: Bhogha – worldly comforts and desire fulfillment, and Moksha – liberation.</li>
                    </ul>

                    <p id='mukhi10' className='page-heading'>10 {t("mukhi")} {t("rudraksh")}</p>
                    <ul className='page-list'>
                        <li>{t("ruling")} {t("god")}: {t("krishna")}</li>
                        <li>{t("ruling")} {t("planet")}: {t("all")} </li>
                        <li>{t("beeja")} {t("mantra")}: || {t("om")} Hreem {t("namah")}  {t("namah")} ||</li>
                    </ul>
                    <p className='page-heading sub'>{t("benefitsOf",{word:`10 ${t("mukhi")} ${t("rudraksh")}`})}</p>
                    <ul className='page-list sub'>
                        <li>This Rudraksha symbolizes eternal peace.</li>
                        <li>The wearer is protected from negative energies by the shield of Rudraksha.</li>
                        <li>It is also worn for getting success in court cases, land deals, debts, and other losses.</li>
                        <li>Texts say that it is one of the most powerful Rudrakshas that can pacify all the nine planets.</li>
                    </ul>

                    <p id='mukhi11' className='page-heading'>11 {t("mukhi")} {t("rudraksh")}</p>
                    <ul className='page-list'>
                        <li>{t("ruling")} {t("god")}:11 {t("rudras")}</li>
                        <li>{t("ruling")} {t("planet")}: {t("all")} </li>
                        <li>{t("beeja")} {t("mantra")}: || {t("om")} Hreem {t("hoom")}  {t("namah")} ||</li>
                    </ul>
                    <p className='page-heading sub'>{t("benefitsOf",{word:`11 ${t("mukhi")} ${t("rudraksh")}`})}</p>
                    <ul className='page-list sub'>
                        <li>The power of wearing this bead is equivalent to performing 1000 Ashavamedh Yajna and 100 Vajpaye Yajna.</li>
                        <li>It has the capacity to improve the high level of awareness, divine consciousness, wisdom, right judgment, control over senses, vocabulary, fearlessness, success, and adventure.</li>
                        <li>It also pacifies all planets.</li>
                    </ul>

                    <p id='mukhi12' className='page-heading'>12 {t("mukhi")} {t("rudraksh")}</p>
                    <ul className='page-list'>
                        <li>{t("ruling")} {t("god")}:{t("sun")}</li>
                        <li>{t("ruling")} {t("planet")}: {t("sun")} </li>
                        <li>{t("beeja")} {t("mantra")}: || {t("om")} Kraum Ksaum  {t("raum")}  {t("namah")} ||</li>
                    </ul>
                    <p className='page-heading sub'>{t("benefitsOf",{word:`12 ${t("mukhi")} ${t("rudraksh")}`})}</p>
                    <ul className='page-list sub'>
                        <li>This is mostly for leaders as the wearer obtains the qualities of the sun: rule with brilliance, radiance, and power</li>
                        <li>It also helps to release stress, anger, worries, suspicion, and low self-esteem</li>
                        <li>The wearer is also blessed with self-motivation</li>
                    </ul>

                    <p id='mukhi13' className='page-heading'>13 {t("mukhi")} {t("rudraksh")}</p>
                    <ul className='page-list'>
                        <li>{t("ruling")} {t("god")}:{t("kamadeva")}</li>
                        <li>{t("ruling")} {t("planet")}: {t("venus")} </li>
                        <li>{t("beeja")} {t("mantra")}: || {t("om")} {t("hreem")}  {t("namah")} ||</li>
                    </ul>
                    <p className='page-heading sub'>{t("benefitsOf",{word:`13 ${t("mukhi")} ${t("rudraksh")}`})}</p>
                    <ul className='page-list sub'>
                        <li>It is for worldly desires</li>
                        <li>It has the power of attraction with the hypnotic power of Vashikaran to the wearer</li>
                        <li>It also raises Kundalini energy and awakens many Siddhis</li>
                    </ul>

                    <p id='mukhi14' className='page-heading'>14 {t("mukhi")} {t("rudraksh")}</p>
                    <ul className='page-list'>
                        <li>{t("ruling")} {t("god")}:{t("hanuman")}</li>
                        <li>{t("ruling")} {t("planet")}: {t("mars")} </li>
                        <li>{t("beeja")} {t("mantra")}: || {t("om")} {t("namah")} ||</li>
                    </ul>
                    <p className='page-heading sub'>{t("benefitsOf",{word:`14 ${t("mukhi")} ${t("rudraksh")}`})}</p>
                    <ul className='page-list sub'>
                        <li>14 Mukhi Rudraksha is known as the Deva mani or the most precious divine gem.</li>
                        <li>14 Mukhi Rudraksha symbolizes brevity, strong willpower, and courage, the qualities of Hanuman</li>
                        <li>The wearer is invoked with the Hanuman inside, thus everything comes naturally after that</li>
                   <li>14 Mukhi Rudraksha is the ultimate protector of the negative effects of Mars and is said to pacify “mangal dosha” in the chart.</li>
                    </ul>
                   
                </div>
                <div className='col rem-page-part2'>
                    <div className='row row-cols-1 row-cols-md-1'>
                        <div className='col web-sticky'>
                            <RudrakshaList option={{ displayHeader: true, headerText: `${t("rudraksh")} ${t("remedies")}`, class: 'col planet-border' }}></RudrakshaList>
                        </div>
                        <div className='col'>
                            <PlanetList option={{ displayHeader: true, headerText: t("chooseDifferentPlanet"), class: 'col planet-border' }}></PlanetList>
                        </div>
                        <div className='col'>
                            <GemsAndStoneList option={{ displayHeader: true, headerText: `${t("gemstones")} ${t("remedies")}`, class: 'col planet-border' }}></GemsAndStoneList>
                        </div>
                    </div>


                </div>
            </div>
            <AskQuestionBanner></AskQuestionBanner>
        </>
    )
}
