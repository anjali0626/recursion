//WAP to calculate the sum of 1st n natural numbers using recursion

function calcSumOfNNaturalNum(n) {

  // Base Case
  if (n < 1) {
    return 0;
  }

  // Recursive case
  return n + calcSumOfNNaturalNum(n-1);
}

var sumOfFirstTenNaturalNums = calcSumOfNNaturalNum(10); // 55