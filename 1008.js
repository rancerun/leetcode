
var bstFromPreorder = function(preorder) {
  let rootValue = preorder[0];
  let root = new TreeNode(rootValue);

  let treeTraversal = (root, value) => {
    if (value < root.val && !root.left) {
      root.left = new TreeNode(value);
    } else if (value > root.val && !root.right) {
      root.right = new TreeNode(value);
    } else if (value < root.val) {
      treeTraversal(root.left, value);
    } else if (value > root.val) {
      treeTraversal(root.right, value);
    }
  }

  for (let i = 1; i < preorder.length; i++) {
    treeTraversal(root, preorder[i]);
  }

  return root;
};