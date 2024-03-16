'use client'
import { useUserContext } from '@/context/user/user.context'
import ProfileCard from '@/shared/components/profile-card/profile-card'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

type UserProfilePageParams = {
    id: string
}

const UserProfilePage = () => {
    const router = useRouter()
    const { id: userProfileId } = useParams<UserProfilePageParams>()
    const { getUserById } = useUserContext()
    const user = getUserById(userProfileId)

    if (!user) {
        return router.push('/')
    }
    return <ProfileCard user={user} />
}

export default UserProfilePage
