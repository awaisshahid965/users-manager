import React, { FC, useState } from 'react'
import { profileCardStyles, profileIconActiveClasses, profileIconClasses } from './profile-card.styles'
import { IProfileCard, ProfileOverviewTypes } from './profile-card.types'
import { FaMap, FaLock, FaPhone, FaRegEnvelope, FaUserNinja, FaCalendar } from 'react-icons/fa6'
import ProfileCardOverview from './profile-card-overview/profile-card-overview'
import Map from '../map/map'

const ProfileCard: FC<IProfileCard> = ({ user }) => {
    const [profileOverviewType, setProfileOverviewType] = useState<ProfileOverviewTypes>(ProfileOverviewTypes.USERNAME)

    const onProfileIconOver = (profileType: ProfileOverviewTypes) => {
        setProfileOverviewType(profileType)
    }

    // Higher order function to avoid if-elif
    const getProfileIconOverForType = (profileType: ProfileOverviewTypes) => () => onProfileIconOver(profileType)

    const getActiveClassForProfileIcon = (profileType: ProfileOverviewTypes) => {
        if (profileType === profileOverviewType) {
            return profileIconActiveClasses
        }
        return ''
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
                    <div className="flex flex-row w-full justify-around max-w-[48rem] mx-auto my-8 box-content">
                        <FaUserNinja
                            className={`${profileIconClasses} ${getActiveClassForProfileIcon(ProfileOverviewTypes.USERNAME)}`}
                            onMouseOver={getProfileIconOverForType(ProfileOverviewTypes.USERNAME)}
                        />
                        <FaRegEnvelope
                            className={`${profileIconClasses} ${getActiveClassForProfileIcon(ProfileOverviewTypes.EMAIL)}`}
                            onMouseOver={getProfileIconOverForType(ProfileOverviewTypes.EMAIL)}
                        />
                        <FaCalendar
                            className={`${profileIconClasses} ${getActiveClassForProfileIcon(ProfileOverviewTypes.BIRTHDAY)}`}
                            onMouseOver={getProfileIconOverForType(ProfileOverviewTypes.BIRTHDAY)}
                        />
                        <FaMap
                            className={`${profileIconClasses} ${getActiveClassForProfileIcon(ProfileOverviewTypes.LOCATION)}`}
                            onMouseOver={getProfileIconOverForType(ProfileOverviewTypes.LOCATION)}
                        />
                        <FaPhone
                            className={`${profileIconClasses} ${getActiveClassForProfileIcon(ProfileOverviewTypes.CELL)}`}
                            onMouseOver={getProfileIconOverForType(ProfileOverviewTypes.CELL)}
                        />
                        <FaLock
                            className={`${profileIconClasses} ${getActiveClassForProfileIcon(ProfileOverviewTypes.PASSWORD)}`}
                            onMouseOver={getProfileIconOverForType(ProfileOverviewTypes.PASSWORD)}
                        />
                    </div>
                </div>
            </div>
            <div className="max-w-[60rem] h-[40rem] overflow-hidden mx-auto relative mb-12">
                <Map longitude={user.location.longitude} latitude={user.location.latitude} key={user.id} />
            </div>
        </>
    )
}

export default ProfileCard
