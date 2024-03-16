import React, { FC } from 'react'
import { ProfileCardOverviewIconsProps, ProfileOverviewTypes } from '../profile-card.types'
import { profileIconActiveClasses, profileIconClasses } from '../profile-card.styles'
import { FaMap, FaLock, FaPhone, FaRegEnvelope, FaUserNinja, FaCalendar } from 'react-icons/fa6'

const ProfileCardOverviewIcons: FC<ProfileCardOverviewIconsProps> = ({ profileOverviewType, onProfileIconOver }) => {
    // Higher order function to avoid if-elif
    const getProfileIconOverForType = (profileType: ProfileOverviewTypes) => () => onProfileIconOver(profileType)

    const getActiveClassForProfileIcon = (profileType: ProfileOverviewTypes) => {
        if (profileType === profileOverviewType) {
            return profileIconActiveClasses
        }
        return ''
    }

    return (
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
    )
}

export default ProfileCardOverviewIcons
