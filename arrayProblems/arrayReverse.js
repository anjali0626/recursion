// WAP to reverse the contents of an array using recursion

function reverseArray(arr) {

  var reversedArray = [];

  var n = arr.length;

  function subroutine(n) {

    // Base case
    if (n === 0) {
      return;
    }

    reversedArray.push(arr[n-1]);

    // Recursive case
    subroutine(n-1);

  }

  subroutine(n);

  return reversedArray;
}

var reversedArray = reverseArray([1,2,3,4,5]); // [5,4,3,2,1]