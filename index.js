// const drivers = ['Sally','Bob','Freddy','Claudia']

// function returnFirstTwoDrivers(drivers) {
//     const firstTwo = function() {
//        return drivers.slice(0,2); 
//     }
//     return firstTwo();
// }

const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = (drivers, func) => func(drivers);