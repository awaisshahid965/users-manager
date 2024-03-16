import React, { FC } from 'react'
import { IProfileListing } from './profile-listing.types'
import ProfileListRow from './profile-list-row'

const ProfileListing: FC<IProfileListing> = ({ profiles }) => {
    return (
        <div className="flex flex-col gap-4">
            {profiles.map((profile) => (
                <ProfileListRow {...profile} key={profile.id} />
            ))}
        </div>
    )
}

export default ProfileListing
