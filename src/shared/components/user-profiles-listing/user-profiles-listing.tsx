import React from 'react'
import CustomInput from '@/shared/ui/custom-input/custom-input'
import { InputType } from '@/shared/ui/custom-input/custom-input.types'
import CustomButton from '../../ui/custom-button/custom-button'
import { ButtonTypes } from '../../ui/custom-button/custom-button.types'
import ProfileListing from '../profile-listing/profile-listing'
import CustomSelectBox from '@/shared/ui/custom-selectbox/custom-selectbox'

const UserProfilesListing = () => {
    return (
        <div className="w-full h-screen bg-[#fcfcfc]">
            <div className="flex flex-wrap gap-3 py-6 px-2 justify-center mb-8 max-w-[60rem] mx-auto">
                <CustomInput type={InputType.TEXT} name="search" placeholder="Find Users" />
                <CustomButton title="Search" type={ButtonTypes.SECONDARY} />
                <div className="w-full flex items-center gap-2">
                    <span>By Gender: </span>
                    <CustomSelectBox options={['male', 'female']} />
                </div>
            </div>

            <ProfileListing profiles={[{ text: 'Awais' }]} />
            <div className="flex justify-center gap-4 mt-12">
                <CustomButton title="< Prev" type={ButtonTypes.SIMPLE} />
                <CustomButton title="Next >" type={ButtonTypes.SIMPLE} />
            </div>
        </div>
    )
}

export default UserProfilesListing
