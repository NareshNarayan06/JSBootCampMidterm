function betterThanAverage(arr,myScore) {

    let sumOfArray = 0 ;
    for (let i = 0 ; i < arr.length ; i++){
        sumOfArray += arr[i];
    }

    let totalScore = sumOfArray + myScore;
    let average = Math.floor((totalScore / (arr.length + 1)));

    if (average < myScore){
        return `your score ${myScore} is greater than class average ${average}`
    }else if (average > myScore){
        return `your score ${myScore} is lower than class average ${average}`
    }else {
       return `your score ${myScore} is equal to the class average`
    }

}

module.exports = { betterThanAverage };
