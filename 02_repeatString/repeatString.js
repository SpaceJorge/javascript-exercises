const repeatString = function(string,num) {
    let repeatedText = "";
    if (num < 0){
        return "ERROR"
    }else if (num == 0){
        return ""
    }else{
        for (let i = 0;i<num;i++){
            repeatedText = repeatedText + string;
        }
        return repeatedText
    }
};

// Do not edit below this line
module.exports = repeatString;
