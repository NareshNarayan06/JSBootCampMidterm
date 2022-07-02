function findShortestWord(str) {
    let strToArr = str.split(" ")
    let minimum = strToArr[0] ;
  
    for (let i = 0 ; i < strToArr.length ; i++){
      if (strToArr[i].length < minimum.length){
        minimum = strToArr[i];
      }
    }
    return minimum;
}

module.exports = { findShortestWord };
