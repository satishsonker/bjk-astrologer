import React from 'react'
import { common } from '../../common/common'
import { useTranslation } from "react-i18next";

export default function AstCheckbox({ option }) {
    const { t } = useTranslation();
    option = common.defaultIfEmpty(option, {});
    option.disabled = common.defaultIfEmpty(option.disabled, false);
    option.type = common.defaultIfEmpty(option.type, 'checkbox');
    option.onChange = common.defaultIfEmpty(option.onChange, () => { });
    option.id = common.defaultIfEmpty(option.id, 'astTextbox');
    option.name = common.defaultIfEmpty(option.name, 'astTextbox');
    option.width = common.defaultIfEmpty(option.width, '100%');
    option.className = common.defaultIfEmpty(option.className, '');
    option.value = common.defaultIfEmpty(option.value, true);
    option.hasValidation = common.defaultIfEmpty(option.hasValidation, true);
    option.showLabel = common.defaultIfEmpty(option.showLabel, true);
    option.showHelpText = common.defaultIfEmpty(option.showHelpText, true);
    option.labelText = common.defaultIfEmpty(option.labelText, t('checkbox'));
    option.text = common.defaultIfEmpty(option.text, t('checkbox'));
    return (
        <>
            {option.showLabel && <label htmlFor={option.id} className="form-label">{option.labelText}
                {option.hasValidation && <strong className="text-danger">*</strong>}
            </label>}
            <div className="form-check form-switch">
                <input className={option.className+ " form-check-input"} name={option.name} onChange={e=>option.onChange(e)} defaultChecked={option.value} type={option.type} id={option.id} disabled={option.disabled?"disabled":""} />
                <label className="form-check-label" htmlFor={option.id}>{option.text}</label>
            </div>
        </>
    )
}
