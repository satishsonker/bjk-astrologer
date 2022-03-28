import React from 'react'
import { common } from '../../common/common'

export default function AstTextbox({ option }) {
    option = common.defaultIfEmpty(option, {});
    option.type = common.defaultIfEmpty(option.type, 'text');
    option.onChange = common.defaultIfEmpty(option.onChange, () => { });
    option.id = common.defaultIfEmpty(option.id, 'astTextbox');
    option.name = common.defaultIfEmpty(option.name, 'astTextbox');
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
                <label htmlFor="txtDeviceName" className="form-label">{option.labelText}
                    {option.hasValidation && <strong className="text-danger">*</strong>}
                </label>}
            <input style={{width:option.width}} type={option.type} placeholder={option.placeHolder} name={option.name} value={option.value} onChange={e => option.onChange(e)} className={option.className+ " form-control ast-textbox"} id={option.id} aria-describedby={option.id+"Help"} />
            {option.showHelpText && <div id={option.id+"Help"} className="form-text">{option.helpText}</div>}
        </>
    )
}
