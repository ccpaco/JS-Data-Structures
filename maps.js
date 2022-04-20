/* Another way to solve "missing letter" problem from arrays using maps, without sorting */

let input = "ahgfwike".split(""); //random letters split into array

function missingAlphabet(input) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let alphabetMap = new Map();

  alphabet.forEach((letter) => {
    alphabetMap.set(letter);
  });

  for (var letter in input) {
    if (alphabetMap.has(input[letter])) {
      alphabetMap.delete(input[letter]);
    }
  }

  return alphabetMap;
}

missingAlphabet(input);
