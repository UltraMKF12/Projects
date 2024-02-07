const amount = document.getElementById("amount");
const textResult = document.getElementById("textResult");
const imageResult = document.getElementById("imageResult");

let arrValues = [];
let arrImages = [];

function generate() {
    for(let i = 0; i < amount.value; i++) {
        let randomNumber = Math.floor(Math.random() * 6 + 1);
        arrValues.push(randomNumber);
        arrImages.push(`<img src="dice_images/dice-${randomNumber}.png" alt="Dice Image${randomNumber}">`);
    }

    textResult.textContent = `Rolls: ${arrValues.join(", ")}`;
    imageResult.innerHTML = arrImages.join("");

    arrValues = [];
    arrImages = [];
}