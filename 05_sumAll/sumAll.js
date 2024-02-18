const sumAll = function(a, b) {
    if (typeof a != "number" || typeof b != "number"){
        return "ERROR"
    }
    if (a < 0 || b < 0){
        return "ERROR"
    }
    const min = Math.min(a,b);
    const max = Math.max(a,b);
    return Math.abs( ((max*(max+1))/2) - ((min*(min+1))/2) + min)
};

// Do not edit below this line
module.exports = sumAll;
