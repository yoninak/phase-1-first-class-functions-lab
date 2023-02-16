const returnFirstTwoDrivers = function (array){
 console.log (array.slice(0,2))
 return array.slice(0,2)
}

const returnLastTwoDrivers = function (array) {
    console.log (array.slice(2,4))
    return (array.slice(2,4))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplyValue) {
    return function(fareValue){
        return fareValue * multiplyValue
    }
}
const fareDoubler = createFareMultiplier(2);{

}

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (arrayOfDrivers, func) {
 if (func === returnFirstTwoDrivers) 
 return returnFirstTwoDrivers(arrayOfDrivers);
 else if (func === returnLastTwoDrivers)
 return returnLastTwoDrivers (arrayOfDrivers);
}