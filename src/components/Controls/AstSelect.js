import React from 'react'
import { common } from '../../common/common';
import  '../../css/components/Buttons/AstButton.css';

export default function AstSelect({ option }) {
    option = common.defaultIfEmpty(option, {});
    option.readOnly = common.defaultIfEmpty(option.readOnly, false);
    option.onChange = common.defaultIfEmpty(option.onChange, () => { });
    option.id = common.defaultIfEmpty(option.id, 'astSelect');
    option.name = common.defaultIfEmpty(option.name, 'astSelect');
    option.width = common.defaultIfEmpty(option.width, '100%');
    option.className = common.defaultIfEmpty(option.className, '');
    option.value = common.defaultIfEmpty(option.value, '');
    option.defaultText = common.defaultIfEmpty(option.defaultText, 'Select');
    option.data = common.defaultIfEmpty(option.data, []);
    option.hasValidation = common.defaultIfEmpty(option.hasValidation, true);
    option.showLabel = common.defaultIfEmpty(option.showLabel, true);
    option.showHelpText = common.defaultIfEmpty(option.showHelpText, true);
    option.labelText = common.defaultIfEmpty(option.labelText, 'Ast Select');
    option.helpText = common.defaultIfEmpty(option.helpText, 'Select From Ast Select');
    return (
        <>
            {option.showLabel &&
                <label htmlFor="txtDeviceName" className="form-label">{option.labelText}
                    {option.hasValidation && <strong className="text-danger">*</strong>}
                </label>}
            <select style={{ width: option.width }} readOnly={option.readOnly} name={option.name} value={option.value} onChange={e => option.onChange(e)} className={option.className + " form-control ast-select"} id={option.id} aria-describedby={option.id + "Help"}>
                <option value=''>{option.defaultText}</option>
                {
                    option.data.map(ele => {
                        return <option key={common.getElementKey()} value={ele.id !== undefined ? ele.id : ele}>{ele.value !== undefined ? ele.value : ele}</option>
                    })
                }
            </select>
            {option.showHelpText && <div id={option.id + "Help"} className="form-text">{option.helpText}</div>}
        </>
    )
}
