// WAP to calculate the exponent value of a base using recursion

function findExponent(base, expo) {

  // Edge Case 1
  if (base === 0 && expo === 0) {
    return 'indeterminate';
  }

  // Edge Case 2
  if (expo === 0) {
    return 1;
  }

  // Base case
  if (expo === 1) {
    return base;
  }

  // Recursive case
  return base * findExponent(base, expo-1);
}

var exponentOfTwoToPowerThree = findExponent(2,3); // 8