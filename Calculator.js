function simpleCalculator(num1, operator, num2) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
      default:
        return 'Invalid operator';
    }
  }
  
  console.log(simpleCalculator(4, '+', 2)); 
  // Output: 6
  