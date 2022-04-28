import React from 'react';
import '../../css/components/Banner/Banner.css';
import { useTranslation } from "react-i18next";
import AstButton from '../Controls/AstButton';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function AskQuestionBanner() {
  const { t } = useTranslation();
  return (
    <>
      <div className='banner-container'>
        <div className='ban-icon'>
          <LazyLoadImage src='/images/ask-astro-questions.jpg' alt='Ask Question'/>
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
