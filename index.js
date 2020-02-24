// Code your solution here
const findMatching = (drivers, name) => {
    return drivers.filter(driver => 
        (driver.toUpperCase() === name.toUpperCase())
    )
}

const fuzzyMatch = (drivers, name) => {
    return drivers.filter(driver => 
        (driver.charAt(0) === name.charAt(0))
    )
}

const matchName = (drivers, name) => {
    return drivers.filter(driver => 
        (driver.name === name))
}