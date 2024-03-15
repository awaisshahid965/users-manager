import React, { FC } from 'react'
import { IProfileListRow } from './profile-listing.types'
import CustomButton from '../../ui/custom-button/custom-button'
import { ButtonTypes } from '../../ui/custom-button/custom-button.types'

const ProfileListRow: FC<IProfileListRow> = ({ text, onClickView }) => {
    return (
        <div className="flex flex-row justify-between items-center max-w-[60rem] w-full mx-auto py-8 px-4 border border-neutral-200 rounded-md bg-white shadow-md">
            <p className="text-neutral-800 text-2xl">{text}</p>
            <CustomButton title="View Profile" onClick={onClickView} type={ButtonTypes.SECONDARY} />
        </div>
    )
}

export default ProfileListRow
