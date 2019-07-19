// solution to problem
var distributeCoins = function(root) {
  let moves = 0;

  let stealCoin = (root) => {
    if (root == null) {
      return 0;
    }

    let left = stealCoin(root.left);
    let right = stealCoin(root.right);

    moves += Math.abs(left) + Math.abs(right);
    return root.val + left + right - 1;
  }

  stealCoin(root);
  return moves;
};

// solution if you could move any amount of coins everytime
var distributeCoins = root => {
  let moves = 0;

  let helper = root => {
    if (root == null) {
      return 0;
    }
    else {
      moves ++;
    }

    let left = helper(root.left);
    let right = helper(root.right);

    return;
  }

  helper(root);
  return moves - 1;
}