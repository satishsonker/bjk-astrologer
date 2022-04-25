import React from 'react'
import { common } from '../../common/common';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import '../../css/components/Remedies/Remedies.css';

export default function RemedyList({ option }) {
  const { t } = useTranslation();
  option = common.defaultIfEmpty(option, {});
  option.headerText = common.defaultIfEmpty(option.headerText, `${t("listOf", { word: t("remedies") })}`);
  option.displayHeader = common.defaultIfEmpty(option.displayHeader, false);
  option.class = common.defaultIfEmpty(option.class, ``);
  return (
    <div className={option.class}>
      {option.displayHeader && <p className='planet-list-header'>{option.headerText}</p>}
      <ul className='rem-list'>
        <Link to="/remedies/planeteryRemedies"><li> {t('planetery')} {t('remedies')}</li></Link>
        <Link to="/remedies/gemstonesRemedies"><li> {t("gemstones")}</li></Link>
        <Link to="/remedies/rudrakshRemedies"><li> {t("rudraksh")}</li></Link>
        <Link to="/remedies/mantraRemedies"><li> {t("mantra")}</li></Link>
        <Link to="/remedies/yantraRemedies"><li> {t("yantra")}</li></Link>
        <Link to="/remedies/fastingAndBlessingRemedies"><li> {t("fastingAndBlessing")}</li></Link>
        <Link to="/remedies/socialServiceRemedies"><li> {t("socialService")}</li></Link>
        <Link to="/remedies/spirituaRemedies"><li> {t("spiritua")} {t("remedies")}</li></Link>
        <Link to="/remedies/tantraRemedies"><li> {t("tantra")}</li></Link>
      </ul>
    </div>
  )
}
