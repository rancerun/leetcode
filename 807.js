
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
      let columnValue = column[i];

      let lowestValue = Math.min(rowValue, columnValue);
      let difference = lowestValue - current
      output += difference;
    }
  }


  return output;
};

grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]];
console.log(maxIncreaseKeepingSkyline(grid));