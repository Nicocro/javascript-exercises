const repeatString = function(string, num) {
    let concatenated = ""
    if (num < 0){
        return "ERROR"
    } else {
        for (let i=0; i<num; i++){
            concatenated += string;
        }
        return concatenated;
    }     
};

// Do not edit below this line
module.exports = repeatString;
