import { useUserContext } from '@/context/user/user.context'
import { useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'

const DEFAULT_PAGE_SIZE = '10'
const SEED = 'kwanso'

export type Gender = 'male' | 'female' | ''

const useUserProfilesListing = () => {
    const router = useRouter()
    const { get } = useSearchParams()
    const { users, fetchUsers } = useUserContext()
    const [loading, setLoading] = useState<boolean>(true)
    const [currentPage, setCurrentPage] = useState<string>(get('page') ?? '1')
    const [genderValue, setGenderValue] = useState<Gender>((get('gender') as Gender) ?? '')
    const [searchQuery, setSearchQuery] = useState<string>('')
    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()))
    const filters = {
        seed: SEED,
        results: DEFAULT_PAGE_SIZE,
        page: currentPage,
        gender: genderValue,
    }

    const loadUsers = async () => {
        setLoading(true)
        router.push('?' + new URLSearchParams(filters))
        await fetchUsers(filters)
        setLoading(false)
    }

    useEffect(() => {
        loadUsers()
    }, [genderValue, currentPage])

    const onSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value || ''
        setSearchQuery(searchValue)
    }

    const onPressNextButton = () => {
        const pageNumber = +currentPage
        setCurrentPage(`${pageNumber + 1}`)
    }

    const onPressPrevButton = () => {
        const pageNumber = +currentPage
        if (pageNumber <= 1) {
            return
        }
        setCurrentPage(`${pageNumber - 1}`)
    }

    return {
        loading,
        users: filteredUsers,
        genderValue,
        onSearchInputChange,
        setGenderValue,
        onPressNextButton,
        onPressPrevButton,
    }
}

export default useUserProfilesListing
