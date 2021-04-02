// Code your solution here
function findMatching(driversArray, queryString){
    const matched = driversArray.filter(
        driver => {
            return driver.toLowerCase() === 
            queryString.toLowerCase()
        }
    )
    return matched;
}

function fuzzyMatch(driverList, chars) {
    return driverList.filter(
        driver => 
        driver.indexOf(chars) === 
        chars.indexOf(chars)
        )
    }

function matchName(driversArray, queryString){
    let matchingNames = driversArray.filter(
        driver => 
            driver.name === queryString)
            return matchingNames
        }