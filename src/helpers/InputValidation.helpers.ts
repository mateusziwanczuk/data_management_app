export const isDateValid = (value: string): boolean => {
    const day = Number(value.substring(0,2))
    const month = Number(value.substring(3,5))
    const year = Number(value.substring(6,10))

    const formatDateUnits = (unit: number) => {
        return unit < 10 ? `0${unit}` : unit
    }

    const correctDateFormat = [
        formatDateUnits(day),
        formatDateUnits(month),
        formatDateUnits(year)
    ]

    const dateValidationFormat = new Date([...correctDateFormat].reverse().join('/'))

    return Boolean(
        formatDateUnits(dateValidationFormat.getDate()) === formatDateUnits(day) 
            && value === correctDateFormat.join('/')
            && month >= 1
            && month <= 12
            && String(year).length 
            && value.length === 10
    )
}