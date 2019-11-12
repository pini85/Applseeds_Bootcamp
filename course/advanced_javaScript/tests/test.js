// assert = require("assert");
let expect = require("chai").expect;
let assert = require("chai").assert;

function count_vowels(str) {
  let counter;
  for (let i = 0; i < str.length; i++) {
    if (["a", "e", "i", "o", "u"].indexOf(str.charAt(i)) !== -1) {
      counter++;
    }
  }
  return counter;
}

let str1 = "apple"; //contains vowels and non-vowels
// 2. Typical cases (input that relate to the specific problem)
let str2 = "aeiou";
// ;//contains all the vowels
let str3 = "e"; //1 vowel
let str4 = "r"; //1 non-vowel
let str5 = "eek"; //2 similar vowels – duplicated values
// 3. Edge cases (problematic inputs, rare cases)
let str6 = ""; //empty string
let str7 = "rtgykm mmmm llkk"; //no vowels
