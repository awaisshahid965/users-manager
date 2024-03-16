import { Filter } from '@/shared/types/filter'
import { IUser } from '@/shared/types/user'

export interface IUserContext {
    users: Array<IUser>
    fetchUsers: (filter: Filter) => Promise<void>
    getUserById: (userId: string) => IUser | undefined
}

export const userContextDefaults: IUserContext = {
    users: [],
    fetchUsers: async function () {
        throw new Error('Function not implemented.')
    },
    getUserById: function (): IUser | undefined {
        throw new Error('Function not implemented.')
    },
}
