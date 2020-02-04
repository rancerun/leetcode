function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
 };

var delNodes = function(root, to_delete) {

  let output = [];

  let dfs = (value, root) => {  
    if (!root) {
      return;
    } else if (value === root.val) {
      dfs(value, root.left);
      dfs(value, root.right);
    } else {
      output.push(root);
      dfs(value, root.left);
      dfs(value, root.right);
    }
  }

  for (let i = 0; i < to_delete.length; i++) {
    let current = to_delete[i];
    dfs(current, root);
  }

  return output;
};