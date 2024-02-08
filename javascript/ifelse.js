let temperature = 36

const hightemperature = temperature > 37

const mediumtemperature = temperature >= 35 && temperature <= 37

if (hightemperature) {
    console.log('high temperature')

} else if (mediumtemperature) {
    console.log('medium temperature')

} else {
    console.log('low temperature')
}