const reverseString = function(string) {
    let reversed = "";
    if (string && (string.length > 0) ) {
        for (let i = 0; i<string.length; i++){
            reversed = string.charAt(i) + reversed;
        }
        return reversed
    }
    return ""
};

// Do not edit below this line
module.exports = reverseString;
