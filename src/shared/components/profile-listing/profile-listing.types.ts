export interface IProfileListRow {
    text: string
    onClickView?: () => void
}

export interface IProfileListing {
    profiles: Array<IProfileListRow>
}
