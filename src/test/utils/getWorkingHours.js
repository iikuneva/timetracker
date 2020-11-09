//Function works for eight-hours working day (from 09:00 to 18:00 with an hour-long lunch break), five days a week

function getWorkingHours(firstDate, secondDate) {

    let startDate = new Date(firstDate)
    let endDate = new Date(secondDate)
    let workingDays = 0

    if (startDate.getDate() > endDate.getDate()) {
        console.log('The End Date must be equal or greater then the Start Date!')
        return
    }


    let currentDate = startDate
    while (currentDate.getDate() <= endDate.getDate()) {
        let dayOfWeek = currentDate.getDay()
        if ((dayOfWeek !== 6) && (dayOfWeek !== 0)) {
            workingDays++
        }
        currentDate.setDate(currentDate.getDate() + 1)
    }

    let startDayHours = 18 - startDate.getHours()


    if (startDate.getHours() <= 12) {
        startDayHours--
    }

    let endDayHours = endDate.getHours() - 9;
    if (endDate.getHours() > 12) {
        endDayHours--
    }
    let workingHours = 0
    if (workingDays >= 2) {
        workingHours = startDayHours + (workingDays - 2) * 8 + endDayHours
    } else {
        workingHours = endDate.getHours() - startDate.getHours();
        if (startDate.getHours() <= 12 && endDate.getHours() > 12) {
            workingHours--
        }
    }

    return workingHours
}

export default getWorkingHours