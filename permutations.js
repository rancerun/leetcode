
var permutations = function(string) {
  let stringArray = string.split('');

  let permutationsArray = [];

  let permutationCalc = (array, m = []) => {
    if (array.length == 0) {
      permutationsArray.push(m);
    }

    for (let i = 0; i < array.length; i++) {
      let newArray = array.slice();
      console.log({newArray, m})
      let currentChar = newArray.splice(i, 1);
      permutationCalc(newArray, m.concat(currentChar));
    }
  }

  permutationCalc(stringArray);

  return permutationsArray;
}

console.log(permutations('ABC'));
