const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
};
decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
};
resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
};


const rollButton = document.getElementById("rollButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
let min = 1;
let max = 6;

rollButton.onclick = function() {
    let random1 = Math.floor(Math.random() * (max - min + 1) + min);
    let random2 = Math.floor(Math.random() * (max - min + 1) + min);
    let random3 = Math.floor(Math.random() * (max - min + 1) + min);

    label1.textContent = random1;
    label2.textContent = random2;
    label3.textContent = random3;
};