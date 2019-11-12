let expect = require("chai").expect;
let assert = require("chai").assert;

function count_vowels(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (["a", "e", "i", "o", "u"].indexOf(str.charAt(i)) !== -1) {
      counter++;
    }
  }
  return counter;
}

describe("Vowel Couter", function() {
  describe("Typical cases", function() {
    it("should return 1 in a 1 vowel string", function() {
      expect(count_vowels("e")).to.equal(1);
    });
    it("should return 0 in a 1 non-vowel string", function() {
      expect(count_vowels("r")).to.equal(0);
    });
    it("should return 2 in a duplicated vowel string", function() {
      expect(count_vowels("cheek")).to.equal(2);
    });
    it("should count all the vowels", function() {
      expect(count_vowels("aeiou")).to.equal(5);
    });
  });

  describe("Regular cases", function() {
    it("should return vowel count in a mixed string", function() {
      expect(count_vowels("apple")).to.equal(2);
    });
  });

  describe("Edge cases", function() {
    it("should return 0 for the empty string", function() {
      expect(count_vowels("")).to.equal(0);
    });
    it("should return 0 for a string with no vowels", function() {
      expect(count_vowels("rtgykm mmmm llkk")).to.equal(0);
    });
  });
});
