const { error } = require("node:console");
const fs = require("node:fs");

ARRAY_SIZE = 1000;

// check arguments
if (process.argv.length != 3) {
  console.log(
    "\
    [E] code file required.\n \
    usage: node brainf.js <filaname>\n\
  "
  );

  return 1;
}

var code = "";

// read code from file
try {
  code = fs.readFileSync(process.argv[2], "utf-8");
} catch (err) {
  console.log(err.toString());
  return;
}

// needed variable
var array = new Uint8Array(ARRAY_SIZE);
var code_index = 0;
var bucket_index = 0;
var indicies = [];

// Evaluate code

while (code_index < code.length) {
  code[code_index] == "+"
    ? array[bucket_index]++
    : code[code_index] == "-"
    ? array[bucket_index]--
    : code[code_index] == ">"
    ? bucket_index++
    : code[code_index] == "<"
    ? bucket_index--
    : code[code_index] == "["
    ? indicies.push(code_index)
    : code[code_index] == "]"
    ? array[bucket_index] != 0
      ? (code_index = indicies[indicies.length - 1])
      : indicies.pop()
    : code[code_index] == "."
    ? process.stdout.write(String.fromCharCode(array[bucket_index]))
    : code[code_index] == ","
    ? (array[bucket_index] = 65) // doesn't support input just returns an A TODO: Will add later.
    : NaN;

  code_index++;
}
