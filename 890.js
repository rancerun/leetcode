//lesson: find ways to break out of comparison loops the moment they differ
//lesson2: try seeing if you can compare word & pattern at same time

var findAndReplacePattern = function(words, pattern) {
  let output = [];

  const calculateNums = (word) => {
    let obj = {};
    let count = 0;
    let numRepresentation = '';

    for (let i = 0; i < word.length; i++) {
      let currentLetter = word[i];
      if (obj[currentLetter] || obj[currentLetter] == 0) {
        numRepresentation = numRepresentation + obj[currentLetter].toString();
      } else {
        obj[currentLetter] = count;
        numRepresentation = numRepresentation + count.toString();
        count ++;
      }
    }

    return numRepresentation;
  }

  let patternRepresentation = calculateNums(pattern);

  for (let j = 0; j < words.length; j++) {
    let currentWordRepresentation = calculateNums(words[j]);
    if (currentWordRepresentation == patternRepresentation) {
      output.push(words[j]);
    }
  }

  return output;
};

console.log(findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"], "abb"));