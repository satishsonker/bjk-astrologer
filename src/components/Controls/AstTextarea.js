import React from 'react'
import { common } from '../../common/common'
import { useTranslation } from "react-i18next";

export default function AstTextarea({option}) {
    const { t } = useTranslation();
    option = common.defaultIfEmpty(option, {});
    option.onChange = common.defaultIfEmpty(option.onChange, () => { });
    option.id = common.defaultIfEmpty(option.id, 'astTextbox');
    option.name = common.defaultIfEmpty(option.name, 'astTextbox');    
    option.cols = common.defaultIfEmpty(option.name, 20);    
    option.rows = common.defaultIfEmpty(option.name, 4);
    option.width = common.defaultIfEmpty(option.width, '100%');
    option.className = common.defaultIfEmpty(option.className, '');
    option.value = common.defaultIfEmpty(option.value, '');
    option.placeHolder = common.defaultIfEmpty(option.placeHolder, 'Enter Your Text Here');
    option.hasValidation = common.defaultIfEmpty(option.hasValidation, true);
    option.showLabel = common.defaultIfEmpty(option.showLabel, true);
    option.showHelpText = common.defaultIfEmpty(option.showHelpText, true);
    option.labelText = common.defaultIfEmpty(option.labelText, 'Ast Textbox');
    option.helpText = common.defaultIfEmpty(option.helpText, 'Enter text in Ast Textbox');
    return (
        <>
            {option.showLabel &&
                <label htmlFor={option.id} className="form-label">{option.labelText}
                    {option.hasValidation && <strong className="text-danger">*</strong>}
                </label>}
            <textarea style={{width:option.width}} cols={option.cols} rows={option.rows} placeholder={option.placeHolder} name={option.name} value={common.defaultIfEmpty(option.value,"")} onChange={e => option.onChange(e)} className={option.className+ " form-control ast-textbox"} id={option.id} aria-describedby={option.id+"Help"} />
            {option.showHelpText && <div id={option.id+"Help"} className="form-text">{option.helpText}</div>}
        </>
    )
}
