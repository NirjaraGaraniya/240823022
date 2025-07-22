const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question("Enter a number to check if it is prime: ", (num) => {
    const n = parseInt(num);
    if (isNaN(n) || n < 1) {
      console.log("Please enter a valid number greater than 0.");
    } else {
      let isPrime = true;
      if (n <= 1) isPrime = false;
      else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
          if (n % i === 0) {
            isPrime = false;
            break;
          }
        }
      }
      console.log(`${n} is ${isPrime ? "a prime" : "not a prime"} number.`);
    }
    readline.close();
  });

//   output
//   Enter a number to check if it is prime: 11
// 11 is a prime number.
  