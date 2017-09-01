// WAP to calculate the factorial of n using recursion

function findFactorial(n) {

  // Base Case
  if (n === 1) {
    return 1;
  }

  // Recursive case
  return n * findFactorial(n-1);
}

var factorialOfFive = findFactorial(5); // 120