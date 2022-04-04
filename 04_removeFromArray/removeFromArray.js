const removeFromArray = function(array, ...unwantedItems) {
    const newArray = [];
    let flag = 0;
    for (const item of array){
       
        for (const unwanted of unwantedItems){
        
            if (unwanted === item) {
                flag = 1;
                break;
            }
        }

        if (flag == 0) {
                newArray.push(item);
        }else{
            flag = 0;
        }
    }

    return newArray

};




// Do not edit below this line
module.exports = removeFromArray;
