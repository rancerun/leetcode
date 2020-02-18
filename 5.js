function longestPalindrome(s) {
  let max = '';

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      let left = i;
      let right = i + j;

      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }

      if ((right - left - 1) > max.length) {
        max = s.slice(left + 1, right);
      }
    }
  }
  return max;
}

// INCORRECT
// function longestPalindrome(s) {
//   if (!s.length || s.length < 2) return s;
//   const length = s.length;
//   let startingIdx = 0;
//   let maxLength = 1;

//   const storage = [];

//   for (let i = 0; i < length; i++) {
//     storage[i] = [];
//     storage[i][i] = true;
//   }

//   for (let i = 0; i < length - 1; i++) {
//     if (s[i] === s[i + 1]) {
//       storage[i][i + i] = true;

//       startingIdx = i;
//       maxLength = 2;
//     }
//   }

//   if (length > 2) {
//     for (let k = 3; k <= length; k++) {
//       for (let i = 0; i <= length - k; i++) {
//         let j = i + k - 1;

//         if (s[i] === s[j] && storage[i+1][j-1]) {
//           storage[i][j] = true;
//           if (k > maxLength) {
//             startingIdx = i;
//             maxLength = k;
//           }
//         }
//       }
//     }
//   }
//   return s.slice(startingIdx, (startingIdx + maxLength));
// }


// function longestPalindrome(s) {
//   if (s.length <= 1) return s;
//   let highestPali = '';

//   function verifyPali(s) {
//     if (s.length > 1) {
//       for (let i = 0; i < Math.floor(s.length / 2); i++) {
//         if (s[i] !== s[s.length - 1 - i]) {
//           return false;
//         }
//       }
//     }
//     return true;
//   }

//   for (let i = 0; i < s.length; i++) {
//     const frontChar = s[i];
//     for (let j = i + 1; j <= s.length; j++) {
//       const backChar = s[j];
//       const string = s.slice(i, j);
//       if (verifyPali(string)) {
//         highestPali = string.length > highestPali.length ? string : highestPali; 
//       }
//     }
//   }
//   return highestPali;
// }

console.log(longestPalindrome('aaaaaaaafaaa'));