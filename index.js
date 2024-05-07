const returnFirstTwoDrivers = function(arrayOfDrivers){
    return arrayOfDrivers.slice(0, 2)
}

const returnLastTwoDrivers = function(arrayOfDrivers){
    return arrayOfDrivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    function fareMultiplier(fare){
        return fare * multiplier}
    return fareMultiplier
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arrayOfDrivers, returnDriversFunction){
    return returnDriversFunction(arrayOfDrivers);
}