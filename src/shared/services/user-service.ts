import { RandomUserData } from '../types/random-user'
import { IUser } from '../types/user'
import HttpClient from './http-client'

const USER_API_ENDPOINT = process.env.NEXT_PUBLIC_USER_API_ENDPOINT
const userApiHeaderConfig = { 'Content-Type': 'application/json' }

enum UserEndpoints {
    ALL_USERS = '/',
}

type Filter = {
    page?: string
    gender?: 'male' | 'female'
}

const DEFAULT_PAGE_SIZE = '10'

class UserService extends HttpClient {
    private static _convertRandomApiResultsToUserArray(data: RandomUserData): Array<IUser> {
        return data.results.map((user) => ({
            id: user.login.uuid,
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            location: user.location.coordinates,
            cell: user.cell,
            password: user.login.password,
            gender: user.gender,
            username: user.login.username,
            imageUri: user.picture.large,
        }))
    }

    private static _generateUsersFilters(filter: Filter) {
        const { page, gender } = filter
        return {
            ...(page && { page }),
            ...(gender && { gender }),
            seed: 'kwanso',
            results: DEFAULT_PAGE_SIZE,
        }
    }

    static async fetchUsers(filter: Filter) {
        const filters = this._generateUsersFilters(filter)
        const api = USER_API_ENDPOINT + UserEndpoints.ALL_USERS
        const apiWithSearchParams = `${api}?${new URLSearchParams(filters)}`

        const data = await this.get(apiWithSearchParams, userApiHeaderConfig)
        return this._convertRandomApiResultsToUserArray(data)
    }
}

export default UserService
