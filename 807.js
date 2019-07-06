
var maxIncreaseKeepingSkyline = function(grid) {
  let row = {};
  let column = {};

  for (let i = 0; i < grid.length; i++) {
    row[i] = Math.max(...grid[i]);
    for (let j = 0; j < grid.length; j++) {
      if (!column[i] || grid[j][i] > column[i]) {
        column[i] = grid[j][i];
      }
    } 
  }

  let output = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      let current = grid[i][j];
      let rowValue = row[i];
      let columnValue = column[j];

      let lowestValue = Math.min(rowValue, columnValue);
      if (lowestValue > current) {
        let difference = lowestValue - current;
        output += difference;
      }
    }
  }

  return output;
};

grid = [[59,88,44],
        [3,18,38],
        [21,26,51]];

console.log(maxIncreaseKeepingSkyline(grid));