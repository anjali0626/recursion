// WAP to multiply every value of an array with a given number using recursion and return the changed array

function multiplyArray(arr, num) {

  var multipliededArray = [];

  var n = arr.length;

  function subroutine(n) {

    // Base case
    if (n === arr.length) {
      return;
    }

    multipliededArray.push(arr[n]*num);

    // Recursive case
    subroutine(n+1);

  }

  subroutine(0);

  return multipliededArray;
}

var multipliededArray = multiplyArray([1,2,3,4,5], 2); // [2,4,6,8,10]