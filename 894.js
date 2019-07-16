// did not complete

 function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
 }

var allPossibleFBT = function(n) {
  let output = [];

  if (n < 3 || n % 2 == 0) {
    return null;
  }

  let buildTree = (n) => {
    root = new TreeNode(0);
    root.left = new TreeNode(0);
    root.right = new TreeNode(0);

    n -= 3;

    // while (n > 0) {

    // }
  }

  return output;
};