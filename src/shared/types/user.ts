import { Location } from './location'

export interface IUser {
    id: string
    name: string
    email: string
    location: Location
    cell: string
    password: string
    gender: string
    username: string
    imageUri: string
}
