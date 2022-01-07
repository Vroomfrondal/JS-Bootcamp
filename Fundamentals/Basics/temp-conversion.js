// mini script to convert F to K
// Created by: Christopher DeLeon
const fahrenheit = 95
let celsius = ""
let kelvin = ""

function main() {
    calcFahrenheit()
    calcKelvin()
}

//calc F to Celsius, store in celsius variable & print
function calcFahrenheit() {
    celsius = 5/9 * (fahrenheit-32)
}

//calc Celsius to Kelvin 
function calcKelvin() {   
    kelvin = celsius + 273.15
    console.log("The temperature in Kelvin is: " + kelvin)
}

main()
