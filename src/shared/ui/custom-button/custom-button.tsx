import React, { FC } from 'react'
import { ButtonSize, ICustomButton } from './custom-button.types'
import { buttonSizeClasses, buttonStyleClasses } from './custom-button.styles'

const CustomButton: FC<ICustomButton> = ({
    title,
    type,
    size = ButtonSize.MEDIUM,
    disabled = false,
    onClick,
    classes = '',
}) => {
    return (
        <button
            className={`${buttonStyleClasses[type]} ${buttonSizeClasses[size]} ${classes}`}
            disabled={disabled}
            onClick={onClick}
        >
            {title}
        </button>
    )
}

export default CustomButton
