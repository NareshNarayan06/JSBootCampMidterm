// Nice
function roundToNext5(num) {
  if (num % 5 === 0) {
    return num;
  }
  // looks like this is not needed. The only time num % 5 can be less than one is if it is zero and that case is already handled above.
  //  if (num % 5 < 1) {
  //   console.log('in if');
  //   return num - num % 5;
  // }
  return num + (5 - num % 5);
}

module.exports = { roundToNext5 };
