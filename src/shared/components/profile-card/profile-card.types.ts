import { IUser } from '@/shared/types/user'

export interface IProfileCard {
    user: IUser
}

export enum ProfileOverviewTypes {
    USERNAME = 'username',
    EMAIL = 'email',
    BIRTHDAY = 'birthday',
    LOCATION = 'location',
    CELL = 'cell',
    PASSWORD = 'password',
}

export type ProfileOverviewData = {
    title: string
    text: string
}

export interface ProfileCardOverviewProps extends IProfileCard {
    profileOverviewType: ProfileOverviewTypes
}
