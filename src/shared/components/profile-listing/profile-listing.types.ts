import { IUser } from '@/shared/types/user'

export interface IProfileListRow extends IUser {}

export interface IProfileListing {
    profiles: Array<IUser>
}
