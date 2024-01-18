const temperatureValue = document.getElementById("temperatureValue");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const result = document.getElementById("result");

function convert() {
    if (toF.checked) {
        let temp = Number(temperatureValue.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if (toC.checked) {
        let temp = Number(temperatureValue.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else {
        result.textContent = "Please select a unit!";
    }
}