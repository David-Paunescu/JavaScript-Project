// Select the "function form" and "result" elements and store them in a constant.
const form = document.querySelector('#function-form');
const resultDiv = document.querySelector('#result');

// Add an event listener to the form for when it is submitted
form.addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the default form submission behavior

  // Get the selected function from the input elements and store it in a constant
  const selectedFunction = document.querySelector('input[name="functions"]:checked').value;

  // Get the input string from the form element
  let inputString = form.elements.string.value;


  // Depending on the selected function, manipulate the input string and store the result back in the inputString variable
  if (selectedFunction === ('uppercase')) {
    inputString = upperCase(inputString);
  }

  if (selectedFunction === ('reverse')) {
    inputString = reverse(inputString);
  }

  if (selectedFunction === ('vowels')) {
    inputString = countVowels(inputString);
  }

  if (selectedFunction === ('count-words')) {
    inputString = countWords(inputString);
  }

  if (selectedFunction === ('capitalize')) {
    inputString = capitalize(inputString);
  }

  if (selectedFunction === ('palindrome')) {
    inputString = palindrome(inputString);
  }

  if (selectedFunction === ('long-short')) {
    inputString = longShort(inputString);
  }

  if (selectedFunction === ('most-frequent')) {
    inputString = mostFrequent(inputString);
  }

  if (selectedFunction === ('duplicate-char')) {
    inputString = duplicate(inputString);
  }

  // Display the result in the result element
  resultDiv.textContent = inputString;
});

//1. Convert string to uppercase
function upperCase(str) {
  return str.toUpperCase();
}


//2. Reverse string
function reverse(str) {
  return str.split("").reverse().join("");
}


//3. Count the number of vowels in a string
function countVowels(str) {
  const vowels = "aeiou";
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if(vowels.includes(str[i].toLowerCase())){
      counter++;
     }
  }
  return `The string has ${counter} vowels`;
}


//4. Count the number of words in a string
function countWords(str) {
  const arr = str.split(" ");
  return `The string has ${arr.length} words`;
}


//5. Convert string to title case
function capitalize(str) {
  let arr = str.toLowerCase().split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}


//6. Check if string is a palindrome
function palindrome(str) {
  const arr = str.split("");
  const reversed = arr.reverse().join("");
  return str === reversed? `The string "${str}" is a palindrome` : `The string "${str}" is NOT a palindrome`;
}


//7. Find the longest and shortest words in a string
function longShort(str) {
  const arr = str.split(" ");
  const res = arr.sort((a,b)=> a.length - b.length);
  return `The shortest word is "${arr[0]}", and the longest word is "${arr[arr.length - 1]}"`;
}


//8. Find the most frequent word in a string
function mostFrequent(str) {

  let obj = {};
  const arr = str.split(" ");
  if(arr.length === 1) {
    return `Please insert more words.`;
  }
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  const max = Math.max(...Object.values(obj));
  
  for (let [key, value] of Object.entries(obj)) {
    if (value === max) {
      return `The most frequent word is "${key}"`;
    }
  }
}


// 9. Return Only Duplicate Characters
function duplicate(str) {
  let final = [];
  let arr = str.split("").sort();
  arr.filter((e,i)=> {
    if(e === arr[i+1]) {
      final.push(e)
    }
  })
  if(final.length === 0){
    return "The string has no duplicate characters"
  }
  return Array.from(new Set(final)).join("");
}