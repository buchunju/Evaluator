ARRAY_SIZE = 1000;

// brainfuck code
var code =
  ">>++++[<+++++[<+++++>-]>-]<<++++.---.>++[<+++>-]<+..+++.>>>++++[<++++[<++>-]>-]<<.--[>++++<-]>-.>++++[<-->-]<.+++.>+++[<-->-]<.>++++[<-->-]<.";

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
