import { expect } from "chai";
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
    return i.id === id;
  });
}
console.log("get candy with the id of as12f", getCandy(candyStore, "as12f"));
function getPrice(candyStore, id) {
  return getCandy(candyStore, id).price;
}
console.log("get the price of the id of 5hd7y", getPrice(candyStore, "5hd7y"));
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
addCandy(candyStore, "asdfghj", "Pinis candy store", 34);
console.log("added new obj", candyStore.candies);

function buy(candyStore, id) {
  var candy = getCandy(candyStore, id);
  if (candy.amount > 0) {
    candyStore.cashRegister += candy.price;
    candy.amount--;
  }
}
buy(candyStore, "as12f");
console.log("after buying the first candy", candyStore);
