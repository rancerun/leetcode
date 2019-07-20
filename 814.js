
// original solution - doesn't work
// var pruneTree = function(root) {
//   if (root.left) {
//     pruneTree(root.left);
//   }
//   if (root.right) {
//     pruneTree(root.right);
//   }
//   if (root.val == 0 && !root.left && !root.right) {
//     root.val = null;
//     return;
//   }

//   return root;
// };

// revised solution - works
var pruneTree = function(root) {
  if (!root) {
    return null;
  }
  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);
  if (root.val == 0 && !root.left && !root.right) {
    return null;
  }

  return root;
};