function timeConversion(s) {
    const amPmIndicator = s.slice(8)
    const amPmHour = s.slice(0, 2)
    let convertedHour = ''

    if (amPmIndicator == 'AM' && amPmHour == '12')
        convertedHour = '00'
    else if (amPmIndicator == 'PM' && amPmHour != '12')
        convertedHour = (parseInt(amPmHour) + 12).toString()
    else
        convertedHour = amPmHour

    let convertedTime = s.replace(s.slice(8), '')
    convertedTime = convertedTime.replace(convertedTime.slice(0, 2), convertedHour)

    return convertedTime
}

console.log(timeConversion('12:01:00AM'))