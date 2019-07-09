
var insertIntoBST = function(root, val) {
  let bstSearch = (root, val) => {

    if (root.val < val) {
      if (root.right) {
        bstSearch(root.right, val);
      } else {
        root.right = new TreeNode(val);
      }
    } else if (root.val > val) {
      if (root.left) {
        bstSearch(root.left, val);
      } else {
        root.left = new TreeNode(val);
      }
    }
  }

  bstSearch(root, val);

  return root;
};