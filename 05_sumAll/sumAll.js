const sumAll = function(numOne,numTwo) {
    if ( (typeof(numOne) != "number") || (typeof(numTwo) != "number") ) {
        return "ERROR"
    } else if ( (numOne < 0) || (numTwo < 0) ) {
        return "ERROR"
    }
    
    let sum = 0;

    if ( numOne == numTwo ) {
        return numOne
    } else if (numOne>numTwo) {
        for (let i = numTwo; i<=numOne ;i++){
            sum = sum + i;
        }
        return sum
    } else{
        for (let i = numOne; i<=numTwo ;i++){
            sum = sum + i;
        }
        return sum
    }

};

// Do not edit below this line
module.exports = sumAll;
