const palindromes = function (string) {
    const oldString = string.toLowerCase();
    let onlyLetterString = "";
    for (let i = 0; i<= (string.length-1); i++){
        if ((oldString.charAt(i)>="a")&& (oldString.charAt(i)<="z") ){
            onlyLetterString = onlyLetterString + oldString.charAt(i);
        }
    }
    
    for (let j = 0; j <= (onlyLetterString.length-1); j++ ){
        if ( onlyLetterString.charAt(j) == (onlyLetterString.charAt(onlyLetterString.length-1-j)) ){
            continue;
        } else {
            return false
        }
    }
    return true

};

// Do not edit below this line
module.exports = palindromes;
