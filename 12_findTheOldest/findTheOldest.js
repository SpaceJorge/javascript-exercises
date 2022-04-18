const findTheOldest = function(people) {
    let isSomeoneAlive = false;
    
    const chosen = people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        if (!currentPerson.dateOfDeath){   
            isSomeoneAlive = true;
        }

        return oldestAge < currentAge ? currentPerson : oldest;
    })
   
    /*if (isSomeoneAlive == true){
        return chosen;
    }
    if (!chosen.yearOfDeath){
        return chosen;
    }*/
    
};
    
const getAge = function(birth, death) {
    if (!death) {
    death = new Date().getFullYear();
    }
    return death - birth;
};


// Do not edit below this line
module.exports = findTheOldest;
