import React from 'react'
import CustomInput from '@/shared/ui/custom-input/custom-input'
import { InputType } from '@/shared/ui/custom-input/custom-input.types'
import CustomButton from '../../ui/custom-button/custom-button'
import { ButtonTypes } from '../../ui/custom-button/custom-button.types'
import ProfileListing from '../profile-listing/profile-listing'
import CustomSelectBox from '@/shared/ui/custom-selectbox/custom-selectbox'
import useUserProfilesListing, { Gender } from './hooks/use-user-profiles-listing'
import PageContainer from '../page-container/page-container'

const UserProfilesListing = () => {
    const { loading, users, genderValue, setGenderValue, onSearchInputChange, onPressNextButton, onPressPrevButton } =
        useUserProfilesListing()

    return (
        <PageContainer loading={loading}>
            <div className="w-full min-h-screen bg-[#fcfcfc] pb-12">
                <div className="flex flex-wrap gap-3 py-6 px-2 justify-center mb-8 max-w-[60rem] mx-auto">
                    <CustomInput
                        type={InputType.TEXT}
                        name="search"
                        placeholder="Find Users"
                        onChange={onSearchInputChange}
                    />
                    <CustomButton title="Search" type={ButtonTypes.SECONDARY} />
                    <div className="w-full flex items-center gap-2">
                        <span>By Gender: </span>
                        <CustomSelectBox
                            options={['male', 'female']}
                            defaultValue={genderValue}
                            onChange={(value) => setGenderValue(value as Gender)}
                        />
                    </div>
                </div>

                <ProfileListing profiles={users} />
                <div className="flex justify-center gap-4 mt-12">
                    <CustomButton
                        title="< Prev"
                        type={ButtonTypes.SIMPLE}
                        disabled={loading}
                        onClick={onPressPrevButton}
                    />
                    <CustomButton
                        title="Next >"
                        type={ButtonTypes.SIMPLE}
                        disabled={loading}
                        onClick={onPressNextButton}
                    />
                </div>
            </div>
        </PageContainer>
    )
}

export default UserProfilesListing
