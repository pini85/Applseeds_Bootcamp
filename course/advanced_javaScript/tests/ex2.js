var expect = require("chai").expect;

function transpose(arr) {
  var arrTranspose = [];
  for (var row = 0; row < arr.length; row++) {
    for (var col = 0; col < arr[row].length; col++) {
      if (arrTranspose[col] === undefined) {
        arrTranspose[col] = [];
      }
      arrTranspose[col][row] = arr[row][col];
    }
  }
  return arrTranspose;
}

describe("Transpose Matrix", function() {
  describe("Even Matrix nxn", function() {
    it("should transpose a size 1x1 matrix", function() {
      const matrix = [[1]];
      const transposed = [[1]];
      expect(transpose(matrix)).to.deep.equal(transposed);
    });
    it("should transpose a 2x2 matrix", function() {
      const matrix = [[1, 2], [3, 4]];
      const transposed = [[1, 3], [2, 4]];
      expect(transpose(matrix)).to.deep.equal(transposed);
    });
    it("should transpose a 3x3 matrix", function() {
      const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
      const transposed = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
      expect(transpose(matrix)).to.deep.equal(transposed);
    });
  });
  describe("mxn matrixes", function() {
    it("should transpose a 2x3 matrix", function() {
      const matrix = [[1, 2], [3, 4], [5, 6]];
      const transposed = [[1, 3, 5], [2, 4, 6]];
      expect(transpose(matrix)).to.deep.equal(transposed);
    });
    it("should transpose a 3x2 matrix", function() {
      const matrix = [[1, 2, 3], [4, 5]];
      const transposed = [[1, 4], [2, 5], [3]];
      expect(transpose(matrix)).to.deep.equal(transposed);
    });
  });
});

// Question
// Write tests using Mocha and Chai to the transpose ex, in 2d arrays.
// For your convenience here is the ex description:
// write a function that for a matrix A returns the transpose of A.
// transpose is an operation that flips a matrix over it's diagonal. link: https://en.wikipedia.org/wiki/Transpose
// examples:
// 1 2 => 1 3
// 3 4 2 4
// 1 2 3 => 1 4
// 4 5 2 5
// 3
