// Rotate ASCII Printable

function rotate(str, key) {
    out = ''
    for (let i = 0; i < str.length; i++) {
        const charCode = str[i].charCodeAt(0)
        let shifted = charCode + key
        // Printable from 32 - 126 
        // https://www.asciitable.com/
        console.log(shifted)
        if (shifted > 126) {
            shifted = 31 + (shifted - 126)
        } else if (shifted < 32) {
            shifted = 127 - (32 - shifted)
        }

        // Convert to HEX
        out += shifted.toString("16")
    }

    return out
}

function decrypt(str, key) {
    out = ''
    const hexChars = str.match(/.{1,2}/g) // Split hex to 2 chars
    for (let i = 0; i < hexChars.length; i++) {
        const charCode = parseInt(hexChars[i], 16) // Covert back to ASCII
        let shifted = charCode - key
        
        if (shifted > 126) {
            shifted = 31 + (shifted - 126)
        } else if (shifted < 32) {
            shifted = 127 - (32 - shifted)
        }
        
        out += String.fromCharCode(shifted)
    }

    return out
}

console.log(rotate("Your Message", 12))