
function isValid(inputString) {
  const left = ['(', '{', '['];
  const right = [')', '}', ']'];

  const stack = [];

  const str = inputString;

  if (str.length % 2 > 0) return false;

  if (str.length > 0) {
    for (let i = 0; i < str.length; i++) {
      if (left.indexOf([i]) < 0) {
        const lastEl = stack.pop();
        if (right.indexOf(str[i]) !== left.indexOf(lastEl)) {
          return false;
        }
      } else {
        stack.push(str[i]);
      }
    }
  }

  if (stack.length > 0) return false;
  
  return true;
}