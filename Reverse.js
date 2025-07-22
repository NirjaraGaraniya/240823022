function reverseNumber(n) {
    const reversed = parseInt(n.toString().split('').reverse().join(''));
    return Math.sign(n) * reversed; // handles negative numbers
  }
  
  console.log(reverseNumber(1234));   // Output: 4321
  
  