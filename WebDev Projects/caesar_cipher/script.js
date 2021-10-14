/*
Caesar Cipher
*/

let chars = [];
let str;
let key;

for (let i = 32; i < 127; ++i) {
    let printable = String.fromCharCode(i);
    if (printable.match(/^[A-Z]*$/)) chars.push(printable);
}

const charsLength = chars.length

function encrypt() {
    str = document.getElementById("plainText").value
    key = parseInt(document.getElementById("keyEncrypt").value)
    let encrypted = ""
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        let indexChar = getIndex(char)

        if (char == " ") {
            encrypted += " "
        } else if (char.match(/^[a-z]+$/i)) {
            encrypted += chars[(indexChar + key) % charsLength]
        } else {
            encrypted += char
        }
    }
    document.getElementById("encrypted").innerHTML = encrypted
}

function decrypt() {
    str = document.getElementById("strEncrypted").value
    key = parseInt(document.getElementById("keyDecrypt").value)

    const decrypted = decryptor(str, key)

    document.getElementById("decrypted").innerHTML = decrypted
}

function decryptBruteForce() {
    str = document.getElementById("strEncryptedBF").value
    const decryptedTable = document.getElementById("decryptedBF")
    let arrDecrypted = []
    let rowValue = ""

    for (let i = 0; i <= 26; i++) {
        arrDecrypted.push(decryptor(str, i))
    }

    for (let i = 0; i < arrDecrypted.length; i++) {
        rowValue += `<tr><td>${i}</td><td>${arrDecrypted[i]}</td></tr>`
    }

    decryptedTable.innerHTML = rowValue
}

function decryptor(str, key) {
    let decrypted = ""
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        let indexChar = getIndex(char)
        let shifted = (indexChar - key) % charsLength;

        if (char == " ") {
            decrypted += " "
        } else if (char.match(/^[a-z]+$/i)) {
            if (shifted < 0) shifted += charsLength
            decrypted += chars[shifted]
        } else {
            decrypted += char
        }
    }

    return decrypted
}

function getIndex(char) {
    char = char.toUpperCase()
    return chars
        .map(function (e) {
            return e
        }).indexOf(char)
}
