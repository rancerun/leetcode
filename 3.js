
function lengthOfLongestSubString(str) {
  if (str.length <= 1) return str.length;

  let max = 0;
  let iteratingStr = [];

  for (let i = 0; i < str.length; i++) {
    const curChar = str[i];
    if (iteratingStr.indexOf(curChar) !== -1) {
      max = Math.max(max, iteratingStr.length);
      iteratingStr.splice(0, iteratingStr.indexOf(curChar) + 1);
    }
    iteratingStr.push(curChar);
  }

  return max = Math.max(max, iteratingStr.length);
}

console.log(lengthOfLongestSubString("abcabcbb"));