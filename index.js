const characters = {
    letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(''),
    numbers: "0123456789".split(''),
    symbols: "~`!@#$%^&*()_-+={[}]|:;<,>.?/".split('')
};
    
let subText = document.getElementById("subtext")
let field1 = document.getElementById("field1")
let field2 = document.getElementById("field2")
let charLen = document.getElementById("length")
const symbolCheckbox = document.getElementById("symbolCheckbox");
const numberCheckbox = document.getElementById("numberCheckbox");

function genPassword() {
    let password = ""
    let charLenValue = parseInt(charLen.value)
    let availableCharacters = [...characters.letters, ...characters.numbers, ...characters.symbols];
    
    if (numberCheckbox.checked) {
        availableCharacters = availableCharacters.filter(char => !characters.numbers.includes(char));
    } else {
        
    }
    
    if (symbolCheckbox.checked) {
        availableCharacters = availableCharacters.filter(char => !characters.symbols.includes(char));
    } else {
        
    }
    
    if (charLenValue > 8 && charLenValue < 21) {
        for (let i = 0; i < charLenValue; i++) {
            let index = Math.floor(Math.random() * availableCharacters.length)
            password += availableCharacters[index]
        }
    } else {
        subText.textContent = "Password length must be a minimum of 8 and a maximum of 20 characters"
        return
    }
    return password
}

function clickedGenPW() {
    field2.textContent = genPassword()
    field1.textContent = genPassword()
}

function copyToClipboard1() {
    var copyText = field1.innerText
    navigator.clipboard.writeText(copyText).then(function() {
        subText.textContent = "Copied to clipboard: " + copyText
    })
}

function copyToClipboard2() {
    var copyText = field2.innerText
    navigator.clipboard.writeText(copyText).then(function() {
        subText.textContent = "Copied to clipboard: " + copyText
    })
}
