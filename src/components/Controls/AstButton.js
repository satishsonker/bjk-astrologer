import React from 'react'
import { common } from '../../common/common'
import '../../css/components/Buttons/AstButton.css'
export default function AstButton({option}) {
    option=common.defaultIfEmpty(option,{});
    option.text=common.defaultIfEmpty(option.text,'Button');
    option.icon=common.defaultIfEmpty(option.icon,'');
    option.class=common.defaultIfEmpty(option.class,'');
    option.handler=common.defaultIfEmpty(option.handler,()=>{});

  return (
    <button className={option.class+ ' ast-btn'} onClick={e=>option.handler()}>{option.icon!=="" && <i className={option.icon}></i>} {option.text}</button>
  )
}
