export interface SelectBoxProps {
    options: string[]
    onChange?: (selectedValue: string) => void
    disabled?: boolean
    defaultValue?: string
    classes?: string
}
