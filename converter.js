let unitEl = document.getElementById("unit-el")

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

function convert() {

    let unit = unitEl.value
    
    let lengthFeet = (unit * 3.2808).toFixed(3)
    let lengthMeters = (unit * 0.3048).toFixed(3)
    lengthEl.textContent = unit + " meters  = " + lengthFeet + " feet  | " + unit + " feet = " + lengthMeters + " meters "

    let volumeLiters = (unit * 3.78541).toFixed(3)
    let volumeGallons = (unit * 0.264172).toFixed(3)
    volumeEl.textContent = unit + " liters  = " + volumeGallons + " gallons  | " + unit + " gallons = " + volumeLiters + " liters "

    let massKilograms = (unit * 2.20462).toFixed(3)
    let massPounds = (unit * 0.4536 ).toFixed(3)
    massEl.textContent = unit + " kilos  = " + massKilograms + " pounds  | " + unit + " pounds = " + massPounds + " kilos "



}   