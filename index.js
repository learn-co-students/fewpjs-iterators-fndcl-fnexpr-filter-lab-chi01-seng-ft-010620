const findMatching = (drivers, string) => {
	return drivers.filter(driver => {
		return driver.toLowerCase().indexOf(string.toLowerCase()) !== -1
	})
}

const fuzzyMatch = (drivers, string) => {
	return drivers.filter(driver => {
		return driver.toLowerCase().charAt(0, 1) === string.toLowerCase().charAt( 0, 1)
	})
}

const matchName = (drivers, string) => {
	return drivers.filter(driver => {
		return driver.name === string
	})
}