function sumOfDigits(num) {
    return num
      .toString()
      .split('')
      .map(Number)
      .reduce((a, b) => a + b, 0);
  }
  
  console.log(sumOfDigits(123)); // Output: 6
  