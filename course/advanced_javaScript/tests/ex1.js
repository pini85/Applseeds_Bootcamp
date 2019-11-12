let expect = require("chai").expect;

describe("Checking palindrome", () => {
  describe("Typical cases", () => {
    it("Should return true with a letter palindrome", () => {
      expect(palindrome("eye")).to.equal(true);
    });
    it("Should be true with a number palindrome", () => {
      expect(palindrome("121")).to.equal(true);
    });
  });
  describe("Edge cases", () => {
    it("Should return true if its only only char", () => {
      expect(palindrome("1" || "a")).to.equal(true);
    });
    it("Should return true if empty string", () => {
      expect(palindrome("")).to.equal(true);
    });
  });
});

function palindrome(str) {
  const string = str.toLowerCase();
  string.split("");
  string.split("").reverse();
  return (
    string.split("").toString() ===
    string
      .split("")
      .reverse()
      .toString()
  );
}

// Write tests using Mocha and Chai to the palindrome ex, in basic js.
// Originally we asked you to prompt the user for a string, but for the tests write it as a function and test the function.
// For your convenience here is the ex description:
// Write a JavaScript function that prompts the user for a string and checks whether it is a palindrome.
