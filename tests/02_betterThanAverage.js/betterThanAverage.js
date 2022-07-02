function betterThanAverage(arr, myScore) {
  // Great!!
  let sumOfArray = 0;
  for (let i = 0; i < arr.length; i++) {
    sumOfArray += arr[i];
  }

  const totalScore = sumOfArray + myScore;
  const average = Math.floor((totalScore / (arr.length + 1)));

  if (average < myScore) {
    return `your score ${myScore} is greater than class average ${average}`;
  } if (average > myScore) {
    return `your score ${myScore} is lower than class average ${average}`;
  }
  return `your score ${myScore} is equal to the class average`;
}

module.exports = { betterThanAverage };
