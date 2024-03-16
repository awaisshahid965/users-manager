import React, { useState, ChangeEvent, FC } from 'react'
import { SelectBoxProps } from './custom-selectbox.types'

const CustomSelectBox: FC<SelectBoxProps> = ({ options, onChange, disabled, defaultValue, classes = '' }) => {
    const [selectedOption, setSelectedOption] = useState<string>('')

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        if (!onChange) {
            return
        }
        const selectedValue = e.target.value
        setSelectedOption(selectedValue)
        onChange(selectedValue)
    }

    return (
        <select
            value={selectedOption || undefined}
            onChange={handleSelectChange}
            defaultValue={defaultValue}
            disabled={disabled}
            className={`block mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 ${classes}`}
        >
            <option value="">Select Option</option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}

export default CustomSelectBox
