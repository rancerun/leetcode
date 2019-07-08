
var bstToGst = function(root) {
  let sum = 0;
  let object = {};

  let dfs = (root) => {
    if (root.right) {
      dfs(root.right);
    }
    sum += root.val;
    object[root.val] = sum;
    if (root.left) {
      dfs(root.left);
    }
  }

  dfs(root);

  let bfs = (root) => {
    if (!root) return;
    root.val = object[root.val];
    bfs(root.left);
    bfs(root.right);
  }

  bfs(root);

  return root;
};

console.log(bstToGst([4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]));