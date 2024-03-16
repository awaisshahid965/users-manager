import { ReactNode } from 'react'

export enum ButtonTypes {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    SIMPLE = 'simple',
}

export enum ButtonSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

export interface ICustomButton {
    title: string | ReactNode
    type: ButtonTypes
    size?: ButtonSize
    disabled?: boolean
    onClick?: () => void
    classes?: string
}
