export const getDateFromISOString = (isoDate: string) => {
    if (!isoDate) {
        return ''
    }
    const date = new Date(isoDate)
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}
