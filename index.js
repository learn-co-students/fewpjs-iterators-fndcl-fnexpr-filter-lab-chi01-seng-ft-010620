function findMatching(drivers, string) {
    return drivers.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(drivers, string) {
    let strLength = string.length
    return drivers.filter(driver => {
        return driver.slice(0, strLength) === string
    })
}

function matchName(drivers, string) {
    return drivers.filter(driver => {
        return driver.name === string
    })
}