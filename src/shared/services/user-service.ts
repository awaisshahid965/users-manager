import { Filter } from '../types/filter'
import { RandomUserData } from '../types/random-user'
import { IUser } from '../types/user'
import { getDateFromISOString } from '../utils'
import HttpClient from './http-client'

const USER_API_ENDPOINT = process.env.NEXT_PUBLIC_USER_API_ENDPOINT
const userApiHeaderConfig = { 'Content-Type': 'application/json' }

enum UserEndpoints {
    ALL_USERS = '/',
}

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
            dob: getDateFromISOString(user.dob.date),
            address: `${user.location.street.number}, ${user.location.street.name}`,
        }))
    }

    private static _generateUsersFilters(filter: Filter) {
        const { page, gender } = filter
        return {
            ...(page && { page }),
            ...(gender && { gender }),
            seed: filter.seed,
            results: filter.results,
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
