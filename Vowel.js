function checkVowel(char) {
    const vowels = 'aeiouAEIOU';
    return vowels.includes(char) ? 'Vowel' : 'Consonant';
  }
  
  console.log(checkVowel('a')); 
  console.log(checkVowel('b')); 
 // Output: Vowel                                   
 // Output: Consonant