import React, { FC } from 'react'
import { IProfileListing } from './profile-listing.types'
import ProfileListRow from './profile-list-row'

const ProfileListing: FC<IProfileListing> = ({ profiles }) => {
    return (
        <div className="flex flex-col gap-4">
            {profiles.map((profile, index) => (
                <ProfileListRow {...profile} key={profile.text + index} />
            ))}
        </div>
    )
}

export default ProfileListing
