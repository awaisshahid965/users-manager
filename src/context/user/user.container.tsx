import React, { FC, PropsWithChildren, useState } from 'react'
import { UserProvider } from './user.context'
import { IUserContext, userContextDefaults } from './user.interface'
import UserService from '@/shared/services/user-service'

const UserContainer: FC<PropsWithChildren> = ({ children }) => {
    const [state, setState] = useState<IUserContext>(userContextDefaults)

    // const loadUsers = async () => {
    //     const users = await UserService.fetchUsers()
    //     console.log(users)
    // }

    // useEffect(() => {
    //     loadUsers()
    // }, [])

    const fetchUsers = async (page?: string, gender?: 'male' | 'female') => {
        const users = await UserService.fetchUsers({
            ...(page && { page }),
            ...(gender && { gender }),
        })

        setState((prev) => ({
            ...prev,
            users,
        }))
    }

    return <UserProvider value={{ ...state, fetchUsers }}>{children}</UserProvider>
}

export default UserContainer
