import React from 'react'
import { common } from '../../common/common'
import '../../css/components/Buttons/AstButton.css'
export default function AstButton({option}) {
    option=common.defaultIfEmpty(option,{});
    option.text=common.defaultIfEmpty(option.text,'Button');
    option.handler=common.defaultIfEmpty(option.handler,()=>{});

  return (
    <button className='ast-btn' onClick={e=>option.handler()}>{option.text}</button>
  )
}
