function letterCombinations(digits) {
  const numObj = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };

  if (!digits.length) return [];
  if (digits.length === 1) return numObj[digits];

  let compoundArr = numObj[digits[0]];
  let position = 1;

  while (position !== digits.length) {
    const newCompoundArr = [];
    const nextDigit = digits[position];

    for (let i = 0; i < compoundArr.length; i++) {
      for (let j = 0; j < numObj[nextDigit].length; j++) {
        newCompoundArr.push(compoundArr[i] + numObj[nextDigit][j]);
      }
    }

    compoundArr = newCompoundArr;
    position ++;
  }

  return compoundArr;
}

console.log(letterCombinations('222'));