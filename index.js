// Code your solution here
const findMatching = (drivers, string) => {
    let iMatch = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase()) 
    return iMatch
}

const fuzzyMatch = (drivers, string) => {
    let sMatch = drivers.filter(driver => driver.charAt(0) == string.charAt(0))
    return sMatch
}

const matchName = (drivers, string) => {
    let pMatch = drivers.filter(driver => driver.name == string)
    return pMatch
}