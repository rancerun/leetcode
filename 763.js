
var partitionLabels = function(s) {
  if (s.length < 2) {
    return s.length;
  }

  let obj = {};
  let output = [];

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];

    if (obj[currentChar]) {
      obj[currentChar].push(i);
    } else {
      obj[currentChar] = [];
      obj[currentChar].push(i);
    }
  }

  let beginIndex = 0;

  let firstChar = s[0];
  let firstCharIndexArray = obj[firstChar];
  let endIndex = firstCharIndexArray[firstCharIndexArray.length - 1];

  for (let j = 1; j < s.length; j++) {
    let currentChar = s[j];
    let currentCharIndexArray = obj[currentChar];
    let lastOccurance = currentCharIndexArray[currentCharIndexArray.length - 1];

    if (currentCharIndexArray[0] < endIndex && lastOccurance > endIndex) {
      endIndex = lastOccurance;
    } else if (currentCharIndexArray[0] > endIndex) {
      output.push(endIndex - beginIndex + 1);
      beginIndex = currentCharIndexArray[0];
      endIndex = lastOccurance;
    }
  }

  output.push(endIndex - beginIndex + 1);

  return output;
};

console.log(partitionLabels("ababcbacadefegdehijhklij"));