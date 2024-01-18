const passwordLengthh = document.getElementById("passwordLength");
const includeLowercase = document.getElementById("lowercase");
const includeUppercase = document.getElementById("uppercase");
const includeNumbers = document.getElementById("numbers");
const includeSymbols = document.getElementById("symbols");
const passwordResult = document.getElementById("passwordResult");

function generatePassword() {
    let passwordLength = passwordLengthh.value;
    if(passwordLength <= 1) {
        passwordResult.textContent = "Password must be atleast 2 characters long!";
    }
    else if(!includeLowercase.checked && !includeUppercase.checked && !includeNumbers.checked && !includeSymbols.checked) {
        passwordResult.textContent = "You must select an option for your password!";
    }
    else{
        let characterString = generateCharacterString(includeLowercase.checked, includeUppercase.checked, includeNumbers.checked, includeSymbols.checked);
    
        let password = "";
        for(let i = 0; i < passwordLength; i++) {
            let character = Math.floor(Math.random() * characterString.length);
            password += characterString[character];
        }
        passwordResult.textContent = password;
    }
}

function generateCharacterString(includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercase = "qwertyuiopasdfghjklzxcvbnm";
    const uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()/,.<>";

    let characterString = "";

    characterString += includeLowercase ? lowercase : "";
    characterString += includeUppercase ? uppercase : "";
    characterString += includeNumbers ? numbers : "";
    characterString += includeSymbols ? symbols : "";

    return characterString;
}