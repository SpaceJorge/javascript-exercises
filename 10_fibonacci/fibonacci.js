const fibonacci = function(num) {
    let series = [1,1];
    let sum = 1;
    if ((num == 1) || (num == 2)){
        return 1
    } else if (num < 1){
        return "OOPS"
    }
    for (let i = 1; i<=(num-2); i++){
        sum = series[i] + series[i-1];
        series.push(sum);
    }
    return series.pop()
};

// Do not edit below this line
module.exports = fibonacci;
