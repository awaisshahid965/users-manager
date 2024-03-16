'use client'
import UserContainer from '@/context/user/user.container'
import UserProfilesListing from '@/shared/components/user-profiles-listing/user-profiles-listing'

export default function Home() {
    return (
        <UserContainer>
            <UserProfilesListing />
        </UserContainer>
    )
}
