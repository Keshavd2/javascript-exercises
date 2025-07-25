const convertToCelsius = function(temperatureInF) {
  const convertedTemp = (temperatureInF - 32) * 5 / 9;
  return Math.round(convertedTemp * 10) / 10;
};

const convertToFahrenheit = function(temperatureInC) {
  const convertedTemp = (temperatureInC * 9 / 5) + 32;
  return Math.round(convertedTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
