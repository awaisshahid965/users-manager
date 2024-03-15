import { IUser } from '@/shared/types/user'

export interface IUserContext {
    users: Array<IUser>
    fetchUsers: (page?: string, gender?: 'male' | 'female') => void
}

export const userContextDefaults: IUserContext = {
    users: [],
    fetchUsers: function () {
        throw new Error('Function not implemented.')
    },
}
