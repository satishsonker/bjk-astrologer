import React from 'react';
import '../../css/components/Banner/Banner.css';
import { useTranslation } from "react-i18next";
import AstButton from '../Controls/AstButton';

export default function AskQuestionBanner() {
  const { t } = useTranslation();
  return (
    <>
      <div className='banner-container'>
        <div className='ban-icon'>
          <img src='/images/ask-astro-questions.jpg' alt='Ask Question'></img>
        </div>
        <div className='ban-text'>
          {t("askQuestBannerText")}
        </div>
        <div className='ban-btn'>
          <AstButton option={{ text: t('askToExperts') }}></AstButton>
        </div>
      </div>
    </>
  )
}
