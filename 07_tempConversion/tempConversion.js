const ftoc = function(farenheit) {
  let celcius = 0;
  celcius = (farenheit -32)*(5/9);
  celcius = Math.round(celcius*10)/10;
  return celcius
};

const ctof = function(celcius) {
  let farenheit = 0;
  farenheit = celcius * (9/5) + 32;
  farenheit = Math.round(farenheit*10)/10;
  return farenheit
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
