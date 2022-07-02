function roundToNext5(num) {

    if(num % 5 === 0){           
        return num;
      }else if (num % 5 < 1){
        return num - num % 5
      }
      return num + (5 - num % 5)
}

module.exports = { roundToNext5 };
