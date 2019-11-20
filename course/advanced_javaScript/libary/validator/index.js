class Test {
  constructor(x, y) {
    this.z = "yoyoyo";
    this.x = x;
    this.y = y;
  }
}
const x = new Test("hi", "hello");
console.log(x);

for (const prop in x) {
  console.log(prop);
}
