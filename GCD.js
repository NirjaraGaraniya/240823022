function findGCD(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  console.log(findGCD(20, 28));

  // Output: 4
  