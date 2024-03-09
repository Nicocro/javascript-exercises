const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    const peopleWithAge = people.map((person) => {
        const deathYear = person.yearOfDeath ? person.yearOfDeath : currentYear;
        const age = deathYear - person.yearOfBirth;
        return {...person, age}
    });

    peopleWithAge.sort((a, b) => b.age - a.age)
    return peopleWithAge[0];
    
};

// Do not edit below this line
module.exports = findTheOldest;
