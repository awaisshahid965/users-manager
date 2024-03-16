import React, { FC } from 'react'
import { ProfileCardOverviewProps, ProfileOverviewData, ProfileOverviewTypes } from '../profile-card.types'

const ProfileCardOverview: FC<ProfileCardOverviewProps> = ({ user, profileOverviewType }) => {
    const profileOverViewMap: Record<ProfileOverviewTypes, ProfileOverviewData> = {
        [ProfileOverviewTypes.USERNAME]: {
            title: 'Hi, My name is',
            text: user.name,
        },
        [ProfileOverviewTypes.EMAIL]: {
            title: 'My email address is',
            text: user.email,
        },
        [ProfileOverviewTypes.BIRTHDAY]: {
            title: 'My birthday is',
            text: '',
        },
        [ProfileOverviewTypes.LOCATION]: {
            title: 'My address is',
            text: '',
        },
        [ProfileOverviewTypes.CELL]: {
            title: 'My phone number is',
            text: user.cell,
        },
        [ProfileOverviewTypes.PASSWORD]: {
            title: 'My password is',
            text: user.password,
        },
    }

    return (
        <>
            <p className="text-3xl mt-10 text-neutral-500">{profileOverViewMap[profileOverviewType].title}</p>
            <p className="text-[3.2rem] font-normal mb-4">{profileOverViewMap[profileOverviewType].text}</p>
        </>
    )
}

export default ProfileCardOverview
