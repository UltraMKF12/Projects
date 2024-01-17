const checkboxSubscribe = document.getElementById("checkboxSubscribe");
const paymentVisa = document.getElementById("paymentVisa");
const paymentMastercard = document.getElementById("paymentMastercard");
const paymentPaypal = document.getElementById("paymentPaypal");
const submitButton = document.getElementById("submitButton");
const subscribeText = document.getElementById("subscribeText");
const paymentText = document.getElementById("paymentText");

submitButton.onclick = function() {
    if(checkboxSubscribe.checked) {
        subscribeText.textContent = "Thank you for being subscribed!";
    }
    else {
        subscribeText.textContent = "Please consider subscibing!";
    }

    if(paymentVisa.checked) {
        paymentText.textContent = "You are paying with VISA!";
    }
    else if(paymentMastercard.checked) {
        paymentText.textContent = "You are paying with MASTERCARD!";
    }
    else if(paymentPaypal.checked) {
        paymentText.textContent = "You are paying with PAYPAL!";
    }
    else {
        paymentText.textContent = "Please select a payment type!";
    }
};

console.log(1 > 2 ? "Igaz" : "Hamis");