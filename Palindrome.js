const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question("Enter a number to check for palindrome: ", (num) => {
    const n = parseInt(num);
    if (isNaN(n)) {
      console.log("Please enter a valid number.");
    } else {
      const str = num.toString();
      const reversed = str.split('').reverse().join('');
      if (str === reversed) {
        console.log(`${num} is a palindrome.`);
      } else {
        console.log(`${num} is not a palindrome.`);
      }
    }
    readline.close();
  });
  
//   output
//   Enter a number to check for palindrome: 121
// 121 is a palindrome.