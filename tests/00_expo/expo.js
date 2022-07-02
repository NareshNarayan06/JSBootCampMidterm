// Do not use Math.pow() in your solution.
// looks good!
function expo(base, exponent) {
  let result = 1;
  for (let i = 1; i <= exponent; i++) {
    result *= base;
  }
  return result;
}

module.exports = { expo };
