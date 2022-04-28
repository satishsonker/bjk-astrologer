import React from 'react'
import { common } from '../../common/common';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import '../../css/components/Remedies/Remedies.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function PlanetList({ option }) {
    const { t } = useTranslation();
    option = common.defaultIfEmpty(option, {});
    option.headerText = common.defaultIfEmpty(option.headerText, `${t("listOf",{word:t("planets")})}`);
    option.displayHeader = common.defaultIfEmpty(option.displayHeader, false);
    option.class = common.defaultIfEmpty(option.class, ``);
    option.showScroll = common.defaultIfEmpty(option.showScroll, true);
    option.height = common.defaultIfEmpty(option.height, '300px');
    const scrollable=option.showScroll?'scroll':'hidden';
    return (
        <div className={option.class}>
          { option.displayHeader &&  <p className='planet-list-header'>{option.headerText}</p> }
            <ul className='planet-list' style={{overflowY:scrollable,maxHeight:option.height}}>
                <Link to="/remedies/planeteryRemedies/sun"><li><LazyLoadImage src="/Images/icons/sun48.png" alt={t("sun")} /> {t("sun")} {t("remedies")}</li></Link> 
                <Link to="/remedies/planeteryRemedies/moon"><li><LazyLoadImage src="/Images/icons/moon48.png" alt={t("moon")} /> {t("moon")} {t("remedies")}</li></Link> 
                <Link to="/remedies/planeteryRemedies/mercury"><li><LazyLoadImage src="/Images/icons/mercury48.png" alt={t("mercury")} /> {t("mercury")} {t("remedies")}</li></Link> 
                <Link to="/remedies/planeteryRemedies/jupiter"><li><LazyLoadImage src="/Images/icons/jupiter48.png" alt={t("jupiter")} /> {t("jupiter")} {t("remedies")}</li></Link> 
                <Link to="/remedies/planeteryRemedies/venus"><li><LazyLoadImage src="/Images/icons/venus48.png" alt={t("venus")} /> {t("venus")} {t("remedies")}</li></Link> 
                <Link to="/remedies/planeteryRemedies/saturn"><li><LazyLoadImage src="/Images/icons/saturn48.png" alt={t("saturn")} /> {t("saturn")} {t("remedies")}</li></Link> 
                <Link to="/remedies/planeteryRemedies/rahu"><li><LazyLoadImage src="/Images/icons/rahu48.png" alt={t("rahu")} /> {t("rahu")} {t("remedies")}</li></Link> 
                <Link to="/remedies/planeteryRemedies/ketu"><li><LazyLoadImage src="/Images/icons/ketu48.png" alt={t("ketu")} /> {t("ketu")} {t("remedies")}</li></Link> 
                <Link to="/remedies/planeteryRemedies/mars"><li><LazyLoadImage src="/Images/icons/mars48.png" alt={t("mars")} /> {t("mars")} {t("remedies")}</li></Link> 
            </ul>
        </div>
    )
}
