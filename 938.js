
var rangeSumBST = function(root, L, R) {
  let output = 0;

  let search = (root) => {
    if (root == null) {
      return;
    };
    if (root.val >= L && root.val <= R) {
      output += root.val
    };
    search(root.left);
    search(root.right);
  }

  search(root);

  return output;

};

console.log(rangeSumBST(root = [10,5,15,3,7,null,18], L = 7, R = 15));