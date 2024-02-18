const convertToCelsius = function(fahr) {
  return Number(((5/9) * (fahr - 32)).toFixed(1));
};

const convertToFahrenheit = function(cels) {
  return Number(((9/5) * cels + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
