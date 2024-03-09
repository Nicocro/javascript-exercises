const palindromes = function (stringa) {
    let cleanedString = stringa.toLowerCase().replace(/[\W_]/g, '');
    let reversed = cleanedString.split('').reverse().join('');
    return cleanedString === reversed;
};

// Do not edit below this line
module.exports = palindromes;
