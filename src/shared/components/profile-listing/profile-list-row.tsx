import React, { FC } from 'react'
import { IProfileListRow } from './profile-listing.types'
import CustomButton from '../../ui/custom-button/custom-button'
import { ButtonTypes } from '../../ui/custom-button/custom-button.types'

const ProfileListRow: FC<IProfileListRow> = ({ name, imageUri, email }) => {
    return (
        <div className="flex flex-row justify-between items-center max-w-[60rem] w-full mx-auto py-8 px-4 border border-neutral-200 rounded-md bg-white shadow-md">
            <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-28 h-28 rounded-full" src={imageUri} alt={name} />
                <div className="flex flex-col">
                    <p className="text-neutral-800 text-2xl">{name}</p>
                    <p className="text-neutral-400 text-2xl">{email}</p>
                </div>
            </div>
            <CustomButton title="View Profile" type={ButtonTypes.SECONDARY} />
        </div>
    )
}

export default ProfileListRow
