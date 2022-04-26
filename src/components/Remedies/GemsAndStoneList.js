import React from 'react'
import { common } from '../../common/common';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import '../../css/components/Remedies/Remedies.css';

export default function GemsAndStoneList({ option }) {
    const { t } = useTranslation();
    option = common.defaultIfEmpty(option, {});
    option.headerText = common.defaultIfEmpty(option.headerText, `${t("listOf", { word: t("gemstones") })}`);
    option.displayHeader = common.defaultIfEmpty(option.displayHeader, false);
    option.class = common.defaultIfEmpty(option.class, ``);
    return (
        <div className={option.class}>
            {option.displayHeader && <p className='planet-list-header'>{option.headerText}</p>}
            <ul className='planet-list'>
                <Link to="/remedies/gemsRemedies/blueSapphire#top"><li><img src="/Images/icons/blueSapphire48.png" alt={t("blueSapphire")} /> {t("blueSapphire")}</li></Link>
                <Link to="/remedies/gemsRemedies/blueTopaz"><li><img src="/Images/icons/blueTopaz48.png" alt={t("blueTopaz")} /> {t("blueTopaz")}</li></Link>
                <Link to="/remedies/gemsRemedies/diamond"><li><img src="/Images/icons/diamond48.png" alt={t("diamond")} /> {t("diamond")}</li></Link>
                <Link to="/remedies/gemsRemedies/emerald"><li><img src="/Images/icons/emerald48.png" alt={t("emerald")} /> {t("emerald")}</li></Link>
                <Link to="/remedies/gemsRemedies/moonstone"><li><img src="/Images/icons/moonstone48.png" alt={t("moonstone")} /> {t("moonstone")}</li></Link>
                <Link to="/remedies/gemsRemedies/onyx"><li><img src="/Images/icons/onyx48.png" alt={t("onyx")} /> {t("onyx")}</li></Link>
                <Link to="/remedies/gemsRemedies/opal"><li><img src="/Images/icons/opal48.png" alt={t("opal")} /> {t("opal")}</li></Link>
                <Link to="/remedies/gemsRemedies/pearl"><li><img src="/Images/icons/pearl48.png" alt={t("pearl")} /> {t("pearl")}</li></Link>
                <Link to="/remedies/gemsRemedies/ruby"><li><img src="/Images/icons/ruby48.png" alt={t("ruby")} /> {t("ruby")}</li></Link>
                <Link to="/remedies/gemsRemedies/sunstone"><li><img src="/Images/icons/sunstone48.png" alt={t("sunstone")} /> {t("sunstone")}</li></Link>
                <Link to="/remedies/gemsRemedies/turquoise"><li><img src="/Images/icons/turquoise48.png" alt={t("turquoise")} /> {t("turquoise")}</li></Link>
            </ul>
        </div>
    )
}
