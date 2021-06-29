const returnFirstTwoDrivers = function(anArr) {
    return anArr.slice(0,2);
}

const returnLastTwoDrivers = function(anArr) {
    return anArr.slice(-2);
}

let selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

const createFareMultiplier = (num) => {
    return function(numOfTicket) {
        return num * numOfTicket
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, aFun) => {
    if (aFun == returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    }
    else {
        return returnLastTwoDrivers(drivers);
    }
}