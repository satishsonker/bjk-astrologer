import React from 'react'
import { common } from '../../common/common';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import '../../css/components/Remedies/Remedies.css';

export default function PlanetList({ option }) {
    const { t } = useTranslation();
    option = common.defaultIfEmpty(option, {});
    option.headerText = common.defaultIfEmpty(option.headerText, `${t("listOf",{word:t("planets")})}`);
    option.displayHeader = common.defaultIfEmpty(option.displayHeader, false);
    option.class = common.defaultIfEmpty(option.class, ``);
    return (
        <div className={option.class}>
          { option.displayHeader &&  <p className='planet-list-header'>{option.headerText}</p> }
            <ul className='planet-list'>
                <Link to="/remedies/planeteryRemedies/sun"><li><img src="/Images/icons/sun48.png" alt={t("sun")} /> {t("sun")} {t("remedies")}</li></Link> 
                <Link to="/remedies/planeteryRemedies/moon"><li><img src="/Images/icons/moon48.png" alt={t("moon")} /> {t("moon")} {t("remedies")}</li></Link> 
                <Link to="/remedies/planeteryRemedies/mercury"><li><img src="/Images/icons/mercury48.png" alt={t("mercury")} /> {t("mercury")} {t("remedies")}</li></Link> 
                <Link to="/remedies/planeteryRemedies/jupiter"><li><img src="/Images/icons/jupiter48.png" alt={t("jupiter")} /> {t("jupiter")} {t("remedies")}</li></Link> 
                <Link to="/remedies/planeteryRemedies/venus"><li><img src="/Images/icons/venus48.png" alt={t("venus")} /> {t("venus")} {t("remedies")}</li></Link> 
                <Link to="/remedies/planeteryRemedies/saturn"><li><img src="/Images/icons/saturn48.png" alt={t("saturn")} /> {t("saturn")} {t("remedies")}</li></Link> 
                <Link to="/remedies/planeteryRemedies/rahu"><li><img src="/Images/icons/rahu48.png" alt={t("rahu")} /> {t("rahu")} {t("remedies")}</li></Link> 
                <Link to="/remedies/planeteryRemedies/ketu"><li><img src="/Images/icons/ketu48.png" alt={t("ketu")} /> {t("ketu")} {t("remedies")}</li></Link> 
                <Link to="/remedies/planeteryRemedies/mars"><li><img src="/Images/icons/mars48.png" alt={t("mars")} /> {t("mars")} {t("remedies")}</li></Link> 
            </ul>
        </div>
    )
}
