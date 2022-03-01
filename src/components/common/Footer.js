import React,{useState} from 'react'

export default function Footer() {
    const [isFooterExpand, setIsFooterExpand] = useState(false);
    const handleFooterExpand=()=>{
        setIsFooterExpand(!isFooterExpand);
    }
    return (
        <>
            <div className={isFooterExpand?'bjk-footer footer-expand':'bjk-footer'}>
                <div className="d-flex bd-highlight">
                    <div className="p-2 flex-fill tc bd-highlight"><i className="control-btn fa-brands fa-whatsapp"></i></div>
                    <div className="p-2 flex-fill tc bd-highlight"><i className="control-btn fa-solid fa-phone"></i></div>
                    <div className="p-2 flex-fill tc bd-highlight"><i className="control-btn fa-solid fa-angle-up"></i></div>
                    <div className="p-2 flex-fill tc bd-highlight" onClick={e=>handleFooterExpand()} ><i className={isFooterExpand?"control-btn fa-solid fa-angle-down": "control-btn fa-solid fa-angle-up"}></i></div>
                </div>
            </div>
        </>
    )
}
