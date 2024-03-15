import { createContext, useContext } from 'react'
import { IUserContext, userContextDefaults } from './user.interface'

const UserContext = createContext<IUserContext>(userContextDefaults)

export const UserProvider = UserContext.Provider

export const useUserContext = () => useContext(UserContext)
