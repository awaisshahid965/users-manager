import { CSSProperties } from 'react'

export const profileCardStyles: Record<string, CSSProperties> = {
    container: {
        backgroundImage: 'linear-gradient(to bottom, #333 0%, #333 50%, #f8f8f8 50%)',
    },
}

export const profileIconClasses = 'w-[4rem] h-[4rem] text-[#d9d9d9] pt-4 border-t-2 border-transparent cursor-pointer'

export const profileIconActiveClasses = '!border-lime-500 !text-lime-500'
