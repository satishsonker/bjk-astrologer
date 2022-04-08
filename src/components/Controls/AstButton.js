import React from 'react'
import { common } from '../../common/common'
import '../../css/components/Buttons/AstButton.css'
import { useTranslation } from "react-i18next";
export default function AstButton({option}) {
  const { t } = useTranslation();
    option=common.defaultIfEmpty(option,{});
    option.width=common.defaultIfEmpty(option.width,'100%');
    option.text=common.defaultIfEmpty(option.text,t('button'));
    option.icon=common.defaultIfEmpty(option.icon,'');
    option.class=common.defaultIfEmpty(option.class,'');
    option.handler=common.defaultIfEmpty(option.handler,()=>{});

  return (
    <button style={{width:option.width}} className={option.class+ ' ast-btn'} onClick={e=>option.handler()}>{option.icon!=="" && <i className={option.icon}></i>} {t(option.text)}</button>
  )
}
