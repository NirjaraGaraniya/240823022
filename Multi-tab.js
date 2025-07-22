const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question("Enter a number to display its multiplication table: ", (num) => {
    const n = parseInt(num);
    if (isNaN(n)) {
      console.log("Please enter a valid number.");
    } else {
      for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
      }
    }
    readline.close();
  });
//    output
//    Enter a number to display its multiplication table: 3
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// 3 x 4 = 12
// 3 x 5 = 15
// 3 x 6 = 18
// 3 x 7 = 21
// 3 x 8 = 24
// 3 x 9 = 27
// 3 x 10 = 30