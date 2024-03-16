import React, { FC, useId } from 'react'
import { ICustomInput } from './custom-input.types'

const CustomInput: FC<ICustomInput> = ({
    label,
    name,
    type,
    onChange,
    disabled = false,
    placeholder,
    readonly = false,
    classes = '',
}) => {
    const id = useId()

    return (
        <div className="flex flex-col gap-2">
            {label && <label htmlFor={`${id}`}>{label}</label>}
            <input
                className={`border border-neutral-300 rounded-md py-2 px-3 outline-none focus:shadow-sm focus:shadow-sky-200 ${classes}`}
                type={type}
                id={id}
                name={name}
                disabled={disabled}
                placeholder={placeholder}
                readOnly={readonly}
                onChange={onChange}
            />
        </div>
    )
}

export default CustomInput
