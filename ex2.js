const temperatures = [18, 20, 17, 15, 24, 26, 21]
const sortedTemp = temperatures.sort()

let lowestTemp = sortedTemp[0]
console.log(`Lowest temperature: ${lowestTemp}°C`)

let highestTemp = sortedTemp.pop()
console.log(`Highest temperature: ${highestTemp}°C`)

const averageTemp = temperatures.reduce((a, b) => a + b)/temperatures.length
console.log(`Average temperature: ${averageTemp.toFixed(2)}°C`)

let daysLowerAverage = temperatures.filter(temp => temp < averageTemp).length

console.log(`There were ${daysLowerAverage} days with a lower temperature than the average`)


