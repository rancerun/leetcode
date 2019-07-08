
var numTilePossibilities = function(tiles) {
  let factorial = (num) => {
    if (num == 1) return 1;
    return num * factorial(num - 1);
  }

  let uniqueCount = new Set();

  for (let i = 0; i < tiles.length; i++) {
    uniqueCount.add(tiles[i]);
  }

  return factorial(tiles.length) + uniqueCount.size;
};

console.log(numTilePossibilities("AAABBC"));