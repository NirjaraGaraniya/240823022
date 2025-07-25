function isArmstrong(num) {
    const digits = num.toString().split('');
    const power = digits.length;
  
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);
  
    return sum === num ? "Armstrong" : "Not Armstrong";
  }
  
  console.log(isArmstrong(153)); // Output: Armstrong
  console.log(isArmstrong(123)); // Output: Not Armstrong
  