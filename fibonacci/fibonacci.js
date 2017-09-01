// WAP to calculate the nth fibonacci number using recursion

// Fibonacci Sequence for reference:
// input    0 1 2 3 4 5 6  7  8  9 ...
// output   0 1 1 2 3 5 8 13 21 34 ...

function findNthFibonacciNum(n) {

  // Base Cases
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  // Recursive case
  return findNthFibonacciNum(n-1) + findNthFibonacciNum(n-2);
}

var fifthFibonacciNum = findNthFibonacciNum(5); // 5