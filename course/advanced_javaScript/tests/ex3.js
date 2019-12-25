let expect = require("chai").expect;
// Write tests using Mocha and Chai to the candy store ex, in Objects.
var candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4
    }
  ],
  cashRegister: 200
};
function getCandy(candyStore, id) {
  return candyStore.candies.find(i => {
    if (i.id === id) {
      return i;
    } else {
      alert("Candy not found");
    }
  });
}
console.log("get candy with the id of as12f", getCandy(candyStore, "as12f"));
function getPrice(candyStore, id) {
  return getCandy(candyStore, id).price;
}
// console.log("get the price of the id of 5hd7y", getPrice(candyStore, "5hd7y"));
function addCandy(candyStore, id, name, price) {
  const candy = getCandy(candyStore, id);
  if (candy) {
    candy.amount++;
  } else {
    candyStore.candies.push({
      name: name,
      id: id,
      price: price,
      amount: 1
    });
  }
}
// addCandy(candyStore, "asdfghj", "Pinis candy store", 34);
// console.log("added new obj", candyStore.candies);

function buy(candyStore, id) {
  var candy = getCandy(candyStore, id);
  if (candy.amount > 0) {
    candyStore.cashRegister += candy.price;
    candy.amount--;
  }
}
// buy(candyStore, "as12f");
// console.log("after buying the first candy", candyStore);

describe("Candy shop evaluation", () => {
  describe("Get candies", () => {
    describe("Typical cases", () => {
      it("If there is the candy, should return it", () => {
        expect(getCandy(candyStore, "as12fSS").to.equal(true));
      });
      it("If there is no candy, should alert that are isn't a candy", () => {
        expect(getCandy(candyStore, "fghjhtre").to.equal(window.alert()));
      });
    });
  });
});
const myFunction = (array, type) => {
  array.filter(item => {
    return item.type === type;
  });
};

// describe("Candy Store", function () {
//   describe("get candy", function () {
//       it('should return the candy according to id', function () {
//           const candyStore = getBasicCandyStore();
//           const expected = { name: "mint gum", id: "as12f", price: 2, amount: 2 };
//           expect(getCandy(candyStore, "as12f")).to.deep.equal(expected);
//       });

//   });
//   describe("get price", function () {
//       it('should return the price according to id', function () {
//           const candyStore = getBasicCandyStore();
//           expect(getPrice(candyStore, "as12f")).to.equal(2);
//           expect(getPrice(candyStore, "5hd7y")).to.equal(5);
//       });

//       it('should return null if the candy doesnt exists', function () {
//           const candyStore = getBasicCandyStore();

//           expect(getPrice(candyStore, "no-such-candy")).to.equal(null);
//       });
//       it('should return null if price is not set', function () {
//           const candyStore = getBasicCandyStore();
//           const expected = { name: "mars", id: "abc15", amount: 1 };

//           addCandy(candyStore, expected.id, expected.name, expected.price);

//           expect(getPrice(candyStore, "no-such-candy")).to.equal(null);
//       });
//   });
//   describe("add candy", function () {
//       it('should add a new candy to the store if no such candy exists', function () {
//           const candyStore = getBasicCandyStore();
//           const expected = { name: "mars", id: "abc15", price: 4.5, amount: 1 };

//           addCandy(candyStore, expected.id, expected.name, expected.price);

//           expect(getCandy(candyStore, expected.id)).to.deep.equal(expected);
//       });
//       it('should increment the amount if there is such candy in the store', function () {
//           const candyStore = getBasicCandyStore();
//           const expected = { name: "mars", id: "abc15", price: 4.5, amount: 1 };

//           addCandy(candyStore, expected.id, expected.name, expected.price);
//           addCandy(candyStore, expected.id, expected.name, expected.price);

//           expect(getCandy(candyStore, expected.id).amount).to.equal(2);
//       });

//   });
//   describe("buy candy", function () {
//       it('should add the candy price to the cashRegister', function () {
//           const candyStore = getBasicCandyStore();
//           let cashRegister = candyStore.cashRegister;
//           const candyId = "as12f";
//           const candyPrice = getCandy(candyStore, candyId).price;

//           buy(candyStore, candyId);

//           expect(candyStore.cashRegister).to.equal(cashRegister + candyPrice);
//       });
//       it('should reduce the candy amount by 1', function () {
//           const candyStore = getBasicCandyStore();
//           const candyId = "as12f";
//           const candyAmount = getCandy(candyStore, candyId).amount;

//           buy(candyStore, candyId);

//           expect(getCandy(candyStore, candyId).amount).to.equal(candyAmount - 1);
//       });

//       it('should leave the cashRegister the same if candy amount is 0', function () {
//           const candyStore = getBasicCandyStore();
//           const candyId = "as12f";

//           buy(candyStore, candyId);
//           buy(candyStore, candyId);
//           expect(getCandy(candyStore, candyId).amount).to.equal(0);
//           let cashRegister = candyStore.cashRegister;
//           buy(candyStore, candyId);

//           expect(candyStore.cashRegister).to.equal(cashRegister);
//       });
//   });
// });
