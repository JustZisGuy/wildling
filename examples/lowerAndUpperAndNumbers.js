/* eslint-disable no-console */

const createWildling = require("../src");

const options = {
  patterns: [
    // 0, 1, ... 9, a, b, ... z, A, B, ... Z
    "-"
  ]
};
const wildcard = createWildling(options);

let string = wildcard.next();

while (string) {
  // Use string here
  console.log(string);
  string = wildcard.next();
}
