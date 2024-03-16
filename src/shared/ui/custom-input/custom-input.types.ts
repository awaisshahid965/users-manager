import { ChangeEvent } from 'react'

export enum InputType {
    TEXT = 'text',
    PASSWORD = 'PASSWORD',
}

export interface ICustomInput {
    type: InputType
    name: string
    label?: string
    disabled?: boolean
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    readonly?: boolean
    classes?: string
}
