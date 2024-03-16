import { Filter } from '@/shared/types/filter'
import { IUser } from '@/shared/types/user'

export interface IUserContext {
    users: Array<IUser>
    fetchUsers: (filter: Filter) => Promise<void>
}

export const userContextDefaults: IUserContext = {
    users: [],
    fetchUsers: async function () {
        throw new Error('Function not implemented.')
    },
}
