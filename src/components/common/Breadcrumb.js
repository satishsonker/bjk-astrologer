import React from 'react'
import { Link } from "react-router-dom";
import { common } from '../../common/common';
import '../../css/components/common/Breadcrumb.css'
export default function Breadcrumb({option}) {
    option=common.defaultIfEmpty(option,[{name:'Home',link:"/Dashboard",isActive:true}]);
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {
                   option.map((ele)=>{
                       ele.link= common.defaultIfEmpty(ele.link,"");
                       ele.isActive=common.defaultIfEmpty(ele.isActive,true);
                    return  <li key={common.getElementKey()} className={ele.isActive?"breadcrumb-item active":"breadcrumb-item"} aria-current={ele.isActive?'page':''}>{ele.isActive ? <Link to={ele.link}>{ele.name}</Link>:ele.name}</li>
                    })
                }
            </ol>
        </nav>
    )
}
