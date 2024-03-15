import { ButtonSize, ButtonTypes } from './custom-button.types'

export const buttonStyleClasses = {
    [ButtonTypes.PRIMARY]: 'bg-sky-500 hover:bg-sky-600 text-white transition-colors rounded-md cursor-pointer',
    [ButtonTypes.SECONDARY]:
        'bg-neutral-700 hover:bg-neutral-900 text-white transition-colors px-8 py-3 rounded-md cursor-pointer',
    [ButtonTypes.SIMPLE]:
        'bg-white text-sky-800 transition-colors px-8 py-3 rounded-md cursor-pointer border border-neutral-500',
}

export const buttonSizeClasses = {
    [ButtonSize.SMALL]: 'px-4 py-2 text-[1.25rem]',
    [ButtonSize.MEDIUM]: 'px-7 py-3 text-[1.4rem]',
    [ButtonSize.LARGE]: 'px-10 py-3 text-[1.6rem]',
}
