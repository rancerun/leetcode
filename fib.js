let fibFunction = (n) => {
  let memo = {};

  let fib = (n, memo) => {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    if (memo[n]) {
      return memo[n];
    }

    let result = fib(n - 1, memo) + fib(n - 2, memo);

    memo[n] = result;

    return result;
  }

  return fib(n, memo);
}


console.log(fibFunction(100));