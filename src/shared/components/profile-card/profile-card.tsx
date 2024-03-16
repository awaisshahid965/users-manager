import React, { FC, useState } from 'react'
import { profileCardStyles } from './profile-card.styles'
import { IProfileCard, ProfileOverviewTypes } from './profile-card.types'
import ProfileCardOverview from './profile-card-overview/profile-card-overview'
import Map from '../map/map'
import ProfileCardOverviewIcons from './profile-card-overview-icons/profile-card-overview-icons'

const ProfileCard: FC<IProfileCard> = ({ user }) => {
    const [profileOverviewType, setProfileOverviewType] = useState<ProfileOverviewTypes>(ProfileOverviewTypes.USERNAME)

    const onProfileIconOver = (profileType: ProfileOverviewTypes) => {
        setProfileOverviewType(profileType)
    }

    return (
        <>
            <div className="py-6 px-8" style={profileCardStyles.container}>
                <div className="relative py-4 flex flex-col items-center bg-white max-w-[60rem] mx-auto rounded-sm shadow-md isolate">
                    <div className='after:content-[""] after:absolute after:left-0 after:top-0 after:-z-10 after:h-32 after:w-full after:bg-gray-50 after:border-b after:border-neutral-200'></div>
                    <div className="w-56 h-56 rounded-full border-4 border-white overflow-hidden shadow-md">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={user.imageUri} alt={user.name} />
                    </div>

                    <ProfileCardOverview user={user} profileOverviewType={profileOverviewType} />
                    <ProfileCardOverviewIcons
                        profileOverviewType={profileOverviewType}
                        onProfileIconOver={onProfileIconOver}
                    />
                </div>
            </div>
            <div className="max-w-[60rem] h-[40rem] overflow-hidden mx-auto relative mb-12">
                <Map longitude={user.location.longitude} latitude={user.location.latitude} key={user.id} />
            </div>
        </>
    )
}

export default ProfileCard
