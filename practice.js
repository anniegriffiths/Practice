`Down on the sea`;
("Lie on the ocean");
("Float on the ocean");

const backslash = "This is the first line\nAnd this is the second";
console.log(backslash);

const newline = 'A newline character is written like "\\n".';
console.log(newline);

const addition = "con" + "cat" + "e" + "nate";
console.log(addition);

const math = `half of 100 is ${100 / 2}`;
console.log(math);

console.log(typeof 4.5);
console.log(typeof "x");
console.log(-(10 - 2));

console.log(3 > 2);
console.log(3 < 2);
console.log("Aardvark" < "Zoroaster");
console.log("Itchy" != "Scratchy");
console.log("Apple" == "Orange");
console.log(NaN == NaN);
console.log(true && false);
console.log(true && true);
console.log(false || true);
console.log(false || false);
const numbers = 1 + 1 == 2 && 10 * 10 > 50;
console.log(numbers);
console.log(true ? 1 : 2);
console.log(false ? 1 : 2);
console.log(8 * null);
console.log("5" - 1);
console.log("5" + 1);
console.log("five" * 2);
console.log(false == 0);
console.log(null == undefined);
console.log(null == 0);
console.log(null || "user");
console.log("Agnes" || "user");
console.log(0 || -1);
console.log("" || "!?");
console.log(true || X);
console.log(false && X);
console.log(Math.max(2, 4));

for (let current = 20; true; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
