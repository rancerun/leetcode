
var relativeSortArray = function(arr1, arr2) {

  let orgNums = new Object();

  for (let i = 0; i < arr1.length; i++) {
    let current = arr1[i];
    if (!orgNums[current]) {
      orgNums[current] = 1;
    } else {
      orgNums[current] ++;
    }
  }

  let output = [];

  for (let j = 0; j < arr2.length; j++) {
    let currentNum = arr2[j];
    let numOfTimes = orgNums[currentNum];
    for (let n = 0; n < numOfTimes; n++) {
      output.push(currentNum);
      orgNums[currentNum]--;
      if (orgNums[currentNum] === 0) {
        delete orgNums[currentNum];
      }
    }
  }

  Object.keys(orgNums).forEach(function (sample) {
    for (let i = 0; i < orgNums[sample]; i++) {
      output.push(parseInt(sample));
    }
  })

  return output;

};

relativeSortArray(arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]);