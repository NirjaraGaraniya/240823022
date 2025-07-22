function sumOfNaturalNumbersFormula(n) {
    if (n < 0) {
      return "Input must be a non-negative integer.";
    }
    return n * (n + 1) / 2;
  }
  
  const n1 = 5;
  console.log(`Sum of first ${n1} natural numbers (formula): ${sumOfNaturalNumbersFormula(n1)}`); // Output: 15
  