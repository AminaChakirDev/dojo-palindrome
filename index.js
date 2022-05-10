function palindrome(word) {
    const lowerWord = word.toLowerCase();
    const noSymboleLowerWord = lowerWord.replace(/[^a-zA-Z ]/g, "");
    const noSpacenoSymboleLowerWord = noSymboleLowerWord.split(" ").join("");
    const lengthWord = noSpacenoSymboleLowerWord.length;
    let result = false;
    for (let i = 0; i < lengthWord/2; i++) {
        if (noSpacenoSymboleLowerWord[i] === noSpacenoSymboleLowerWord[lengthWord-(i+1)]) {
            result = true;
        }
        else {
            return false;
        }
    }
    return result;
}

console.log(palindrome("Rot or"));