export const formatInputFeeValue = (value: string) => {
    const inputValue = value
        .replace(/,/, '.')
        .replace(/[^\d.]/g, '')

    const lengthWithDecimalValues = Number(inputValue.indexOf('.') + 3)

    const removeAllDots = (value: string) => value.replace(/\./g, '')

    const removeAllDotsExceptFirstOne = (value: string) => {
        return value
            .substring(0, lengthWithDecimalValues)
            .replace( /^([^.]*\.)(.*)$/, ( a, b, c ) => b + c.replace( /\./g, '' ))
    }

    return inputValue.includes('.')
        ? inputValue.startsWith('.')
            ? removeAllDots(inputValue)
            : removeAllDotsExceptFirstOne(inputValue)
        : inputValue
}

export const formatDateValue = (value: string) => {
    return value.replace(/[^\d/]/g, '')
}