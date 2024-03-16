import React, { FC, PropsWithChildren, useState } from 'react'
import { UserProvider } from './user.context'
import { IUserContext, userContextDefaults } from './user.interface'
import UserService from '@/shared/services/user-service'
import { Filter } from '@/shared/types/filter'

const UserContainer: FC<PropsWithChildren> = ({ children }) => {
    const [state, setState] = useState<IUserContext>(userContextDefaults)

    const getUserById = (userId: string) => {
        const user = state.users.find((user) => user.id === userId)
        return user
    }

    const fetchUsers = async (filter: Filter) => {
        const { page, gender, seed, results } = filter
        const users = await UserService.fetchUsers({
            page,
            gender,
            seed,
            results,
        })

        setState((prev) => ({
            ...prev,
            users,
        }))
    }

    return <UserProvider value={{ ...state, fetchUsers, getUserById }}>{children}</UserProvider>
}

export default UserContainer
