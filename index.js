// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

const findMatching = (array, string) => {
  const lower = string.toLowerCase()
  const matches = array.filter(driver => driver.toLowerCase() === lower)
  return matches;
}

const fuzzyMatch = (array, string) => {
  const lower = string.toLowerCase()
  const matches = array.filter(driver => driver.toLowerCase().startsWith(lower))
  return matches;
}

const matchName = (array, string) => {
  const lower = string.toLowerCase()
  const matches = array.filter(driver => driver['name'].toLowerCase() === lower)
  return matches;
}
