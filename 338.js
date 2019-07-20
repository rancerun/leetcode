
var countBits = function(num) {
  let memo = {};
  let output = [];

  for (let i = 0; i <= num; i++) {
    let baseTwo = 0;
    let currentNum = i;
    let oneCount = 0;
    let shallWeDance = false;

    if (i == 0) {
      shallWeDance = true;
    }

    while (!shallWeDance) {    
      baseTwo = Math.floor(Math.log2(currentNum));
      oneCount ++;

      let difference = i - (2 ** baseTwo);

      if (difference == 0) {
        shallWeDance = true;
      }
      else if (memo[difference]) {
        oneCount += memo[difference];
        shallWeDance = true;
      }

      currentNum = difference;
    }

    memo[i] = oneCount;
    output.push(oneCount);
  }

  return output;
};

console.log(countBits(5));