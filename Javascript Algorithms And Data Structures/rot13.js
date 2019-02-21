/**
JavaScript Algorithms and Data Structures Projects: Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
**/

function rot13(str) {
    // Variable declerations.
    let newArr = [];
    let regEx = /[A-Z]/;
    let newStr = str.split("");

    // Run through each element in the newStr Array
    for (let x in newStr) {
    // Test if it is a regex and either A) convert it and push to the array if it is a valid char [A-Z]
    // B) push it if it is anything else
        if (regEx.test(newStr[x])) {
            // Convert the ASCII num to alpha 0 index (0 thru 25). Check if it needs to be +13 or -13, convert back to ascii num and push
            let tempNum = newStr[x].charCodeAt() - 65;
            if (tempNum >= 13){
                tempNum -= 13;
            } else {
                tempNum += 13;
            }
            newArr.push(String.fromCharCode(tempNum + 65));
        } else {
            newArr.push(newStr[x]);
        }
    }
    // Join it and return
    newStr = newArr.join("");
    return newStr;
}

/*
    https://en.wikipedia.org/wiki/ROT13
    ASCII Table: https://theasciicode.com.ar/ascii-printable-characters/space-ascii-code-32.html

*/


/*
rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP
rot13("SERR CVMMN!") should decode to FREE PIZZA!
rot13("SERR YBIR?") should decode to FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/