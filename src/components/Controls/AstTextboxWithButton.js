import React from 'react'
import { common } from '../../common/common'
import { useTranslation } from "react-i18next";
import '../../css/components/Buttons/AstButton.css'

export default function AstTextboxWithButton({ option }) {
    const { t } = useTranslation();
    option = common.defaultIfEmpty(option, {});
    option.type = common.defaultIfEmpty(option.type, 'text');
    option.onChange = common.defaultIfEmpty(option.onChange, () => { });
    option.id = common.defaultIfEmpty(option.id, 'astTextbox');
    option.name = common.defaultIfEmpty(option.name, 'astTextbox');
    option.width = common.defaultIfEmpty(option.width, '100%');
    option.className = common.defaultIfEmpty(option.className, '');
    option.value = common.defaultIfEmpty(option.value, '');
    option.placeHolder = common.defaultIfEmpty(option.placeHolder, 'Enter Your Text Here');
    option.hasValidation = common.defaultIfEmpty(option.hasValidation, false);
    option.showLabel = common.defaultIfEmpty(option.showLabel, false);
    option.showHelpText = common.defaultIfEmpty(option.showHelpText, false);
    option.labelText = common.defaultIfEmpty(option.labelText, 'Ast Textbox');
    option.helpText = common.defaultIfEmpty(option.helpText, 'Enter text in Ast Textbox');
    option.buttons=common.defaultIfEmpty(option.buttons,[]);
    return (
        <>
            {option.showLabel &&
                <label htmlFor={option.id} className="form-label">{option.labelText}
                    {option.hasValidation && <strong className="text-danger">*</strong>}
                </label>}
            <div className="input-group mb-3">
                <input   
                type={option.type} 
                    className={option.className + " form-control ast-textbox"} 
                    type={option.type} 
                    placeholder={option.placeHolder}
                    name={option.name}
                    value={common.defaultIfEmpty(option.value, "")}
                    onChange={e => option.onChange(e)} 
                    aria-label="Recipient's email" 
                    aria-describedby="button-addon2" />
                    {
                        option.buttons.map(ele=>{
                            return <button key={common.getElementKey()} className={ele.className??""+ " ast-btn-addon"} type="button" onClick={e=>ele.handler()} id={ele.id}>{ele.text}</button>
                        })
                    }
                
            </div>
           
            {option.showHelpText && <div id={option.id + "Help"} className="form-text">{option.helpText}</div>}
        </>
    )
}
