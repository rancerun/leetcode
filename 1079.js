
// did not complete
var numTilePossibilities = function(tiles) {
  let tilesArray = tiles.split('');

  let permutationsArray = [];

  let permutations = (array) => {
    if (array.length == 1) {
      permutationsArray.push(array);
      return array;
    }

    for (let i = 0; i < array.length; i++) {
      let currentChar = array.splice[i, 1];
      let remainingChars = array.slice(0, i) + array.slice(i);
      permutationsArray.push(currentChar + remainingChars);
      permutations(remainingChars);
    }
  }
  permutations(tiles);

  return permutationsArray;
}

console.log(numTilePossibilities("ABC"));
