function isLeapYear(year) {
    // A year is a leap year if it is divisible by 4,
    // except for end-of-century years which must be divisible by 400.
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  
  // Example usage:
  const year1 = 2024;
  const year2 = 1900;
  const year3 = 2000;
  const year4 = 2023;
  
  console.log(`${year1} is a leap year: ${isLeapYear(year1)}`); // Output: 2024 is a leap year: true
  console.log(`${year2} is a leap year: ${isLeapYear(year2)}`); // Output: 1900 is a leap year: false
  console.log(`${year3} is a leap year: ${isLeapYear(year3)}`); // Output: 2000 is a leap year: true
  console.log(`${year4} is a leap year: ${isLeapYear(year4)}`); // Output: 2023 is a leap year: falsegit